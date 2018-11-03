import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private AuthorsService: AuthorsService,
    private route: ActivatedRoute
  ) { }

  author = [];
  id = this.route.snapshot.params["id"];

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor() {
    let a = this.AuthorsService.getAuthor(this.id);
    a.subscribe(data => {
      this.author = data["author"];
    });
  }

  deleteQuote(index) {
    let d = this.AuthorsService.deleteQuote(this.id, index);
    d.subscribe(data => {
      console.log("Quote deleted", data);
      this.getAuthor();
    });
  }

  vote(index, vote) {
    let v = this.AuthorsService.voteQuote(this.id, index, vote);
    v.subscribe(data => {
      console.log("Quote vote changed", data);
      this.getAuthor();
    });
  }
}
