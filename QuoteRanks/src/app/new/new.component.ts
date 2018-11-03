import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newAuthor: any;
  data: any;
  error: boolean = false;

  constructor(
    private AuthorsService: AuthorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newAuthor = {name: ""};
  }

  createAuthor() {
    let createNew = this.AuthorsService.addAuthor({name: this.newAuthor.name});
    createNew.subscribe(
      data => {
        this.data = data;
        if (this.data.error) {
          this.data = this.data.error;
          this.error = true;
          this.newAuthor = {name: ""};
        }
        else {
          this.error = false;
          this.newAuthor = {name: ""};
          this.router.navigate(["/"]);
        }
      }
    );
  }

  goBack() {
    this.router.navigate(["/"]);
  }
}
