import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newQuote: any;
  data: any;
  error: boolean = false;

  constructor(
    private AuthorsService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.newQuote = {quote: ""};
  }

  createQuote() {
    let id = this.route.snapshot.params["id"];
    let createNew = this.AuthorsService.addQuote(id, {quote: this.newQuote.quote});
    createNew.subscribe(
      data => {
        this.data = data;
        if (this.data.error) {
          this.data = this.data.error;
          this.error = true;
          this.newQuote = {quote: ""};
        }
        else {
          this.error = false;
          this.newQuote = {quote: ""};
          this.router.navigate(["/quotes", id]);
        }
      }
    );
  }

  goBack() {
    let id = this.route.snapshot.params["id"];
    this.router.navigate(["/quotes", id]);
  }
}
