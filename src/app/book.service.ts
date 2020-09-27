import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpclient:HttpClient) { }

  getBookData() {
    return this.httpclient.get("http://localhost:8080/data");
  }
  getDataById(id){
    return this.httpclient.get("http://localhost:8080/dataById/"+id)
  }
}
