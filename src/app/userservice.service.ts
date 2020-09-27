import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpclient:HttpClient) { }

  getBookData() {
    return this.httpclient.get("http://localhost:8080/data");
  }

  saveData(data){
    return this.httpclient.post("http://localhost:8080/save",data)
  }

  login(data){
    return this.httpclient.post("http://localhost:8080/check",data);
  }

   getDataById(id){
    return this.httpclient.get("http://localhost:8080/userById/"+id)
  }
}
