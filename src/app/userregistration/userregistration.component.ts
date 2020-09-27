import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from "../userservice.service";

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  userForm:FormGroup

  constructor(private userService:UserserviceService , private router:Router) { }


  register(){
    this.userService.saveData(this.userForm.value).subscribe((res)=>{
      alert("User Created Successfullyt...!")
      this.router.navigate(['']);
      console.log(this.userForm.value)
    })
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName:new FormControl(""),
      phoneNo:new FormControl(""),
      password:new FormControl(""),
      email:new FormControl(""),
      addressLine1:new FormControl(""),
      addressLine2:new FormControl(""),
      city:new FormControl(""),
      pincode:new FormControl("")
    })
  }

}
