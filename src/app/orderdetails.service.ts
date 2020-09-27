import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private httpclient:HttpClient) { }
  getData() {
    return this.httpclient.get("http://localhost:8080/getOrderDetails");
  }
  saveData(data){
    return this.httpclient.post("http://localhost:8080/saveOrderDetails",data)
  }
}
