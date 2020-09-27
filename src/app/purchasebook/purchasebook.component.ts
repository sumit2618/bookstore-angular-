import { Component, OnInit } from '@angular/core';

import { BookService } from "../book.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { AuthenauthenticationService } from "../authenauthentication.service";
import { FormControl, FormGroup } from '@angular/forms';
import { OrderdetailsService } from "../orderdetails.service";
@Component({
  selector: 'app-purchasebook',
  templateUrl: './purchasebook.component.html',
  styleUrls: ['./purchasebook.component.css']
})
export class PurchasebookComponent implements OnInit {

  constructor(public loginservice: AuthenauthenticationService, public orderservice: OrderdetailsService, private router: Router, private bookservice: BookService, private activatedroute: ActivatedRoute) { }

  userid = sessionStorage.getItem('userid');
  quantity = sessionStorage.getItem('qt')

  book: any = [];
  id: number;
  purchaseForm: FormGroup;
  orderdetails: any = [];
  register() {
    this.orderservice.saveData(this.purchaseForm.value).subscribe((res) => {
      alert("Order placed Successfully..!")
      this.orderdetails = res;
      this.router.navigateByUrl('/')
    })
  }

  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]
      this.bookservice.getDataById(this.id).subscribe((data) => {
        this.book = data;
      })
    })
  }


  ngOnInit(): void {
    this.getData()
    this.purchaseForm = new FormGroup({
      bookId: new FormControl(this.id),
      userName: new FormControl(""),
      phoneNo: new FormControl(""),
      address: new FormControl(""),
      quantity: new FormControl(this.quantity)
    })
  }
}
