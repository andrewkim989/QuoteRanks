import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get("/authors");
  }

  addAuthor(newauthor){
    return this._http.post("/authors", newauthor);
  }

  getAuthor(id) {
    return this._http.get("/authors/" + id);
  }

  editAuthor(id, edit) {
    return this._http.put("/authors/" + id, edit);
  }

  addQuote(id, quote) {
    return this._http.post("/authors/" + id, quote);
  }

  deleteQuote(id, index) {
    return this._http.delete("/authors/" + id + "/" + index);
  }

  voteQuote(id, index, vote) {
    return this._http.get("/authors/" + id + "/" + index + "/" + vote);
  }
}
