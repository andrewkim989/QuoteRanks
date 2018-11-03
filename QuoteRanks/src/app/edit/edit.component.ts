import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editform: any;
  data: any;
  error: boolean = false;

  constructor(
    private AuthorsService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAuthor();
    this.editform = {name: ""};
  }

  getAuthor() {
    let id = this.route.snapshot.params["id"];
    let a = this.AuthorsService.getAuthor(id);
    a.subscribe(data => {
      this.editform = data["author"];
    });
  }

  editAuthor() {
    let e = this.AuthorsService.editAuthor(this.editform._id, this.editform);
    e.subscribe(
      data => {
        this.data = data;
        if (this.data.error) {
          this.data = this.data.error;
          this.error = true;
        }
        else {
          this.error = false;
          this.router.navigate(["/"]);
        }
      }
    );
  }

  goBack() {
    this.router.navigate(["/"]);
  }
}
