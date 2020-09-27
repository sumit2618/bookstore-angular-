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
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userservice:UserserviceService ,public loginservice: AuthenauthenticationService, public orderservice: OrderdetailsService, private router: Router, private bookservice: BookService, private activatedroute: ActivatedRoute) { }

  userid = sessionStorage.getItem('userid');
  user:any=[];

  getUserData(){
    if(this.userid!=null){
      this.userservice.getDataById(this.userid).subscribe((data) => {
        this.user = data;
        console.log(this.user)
      })
    }
  }

  ngOnInit(): void {
    this.getUserData()
  }
}
