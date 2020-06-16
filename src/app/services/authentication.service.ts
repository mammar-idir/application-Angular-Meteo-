import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
public authenticated:boolean;
public token:string;
  constructor() { }
 

  public login(usrname:string,password:string){
    if(usrname=='admin' && password=='1234'){
     this.authenticated=true;
     this.saveToken();
    }
    else{
      this.authenticated=false;
    }
return this.authenticated;
  }
  saveToken(){
    this.token="azert";
    localStorage.setItem("myToken",this.token);
  }

  loadToken(){
    this.token=localStorage.getItem("myToken");
    if(this.token == "azert"){
this.authenticated =true;

    }
    else { 
      this.authenticated=false;
    }
    return this.authenticated;

  }

  logout(){
    localStorage.removeItem('myToken');
  }
}
