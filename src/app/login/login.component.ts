import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { AuthenauthenticationService } from "../authenauthentication.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userForm:FormGroup
  data :any = [];
  invalidLogin = false;
  constructor( private loginservice :AuthenauthenticationService,  private userService:UserserviceService , private router:Router) { }

  register(){
    this.userService.login(this.userForm.value).subscribe((res)=>{
      this.data=res;
     if(this.loginservice.authenticate(res)){
      this.router.navigate(['']);
      this.invalidLogin = false
    }else{
      this.invalidLogin=true;
    }
    })
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      phoneNo:new FormControl(""),
      password:new FormControl("")
    })
  }
}

