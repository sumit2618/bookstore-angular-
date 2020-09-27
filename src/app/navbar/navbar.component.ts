import { Component, OnInit } from '@angular/core';
import { AuthenauthenticationService } from "../authenauthentication.service";
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userservice:UserserviceService, public loginservice :AuthenauthenticationService) { }

    userid = sessionStorage.getItem('userid');

    user:any =[];
   getUserData(){
      this.userservice.getDataById(this.userid).subscribe((data) => {
        this.user = data;
        console.log(this.user)
      })
  }

  ngOnInit(): void {
    if(this.userid!=null){
      this.getUserData()
    }
  }
}
