import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenauthenticationService {

  constructor() { }

  authenticate(data){
    if(data!=null){
      sessionStorage.setItem('userid' , data.userId)
      return true;
    }else{
      return false;
    }
  }
  isUserLogin(){
      let user = sessionStorage.getItem('userid');
      console.log(!(user===null))
      return !(user===null);
  }
  logout(){
    sessionStorage.removeItem('userid');
  }
}
