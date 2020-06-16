import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private serviceAuthen :AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(f){ 
  
    console.log(f.username);
   let res = this.serviceAuthen.login(f.username,f.password);
   if(res == true){
     this.router.navigateByUrl('/menu/home');

   }
   else{
    this.router.navigateByUrl('/login');
   }
  
  }

}
