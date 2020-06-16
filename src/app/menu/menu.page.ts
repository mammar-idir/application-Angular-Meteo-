import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
menus:any;
  constructor(private router:Router,
              private authenti:AuthenticationService) { }

  ngOnInit() {

    this.menus=[
      {title:'Home',url:'/menu/home',icon:'home'},
      {title:'Meteo',url:'/menu/meteo',icon:'snow'},
      {title:'Galerie',url:'/menu/gallery',icon:'school'},
      {title:'Localisation',url:'/menu/locations',icon:'sync'},
      {title:'Déconnexion',url:'logout',icon:'log-out'}

    ]
  }
  onMenuAction(m){   
    if(m.url =='logout'){
this.authenti.logout();
this.router.navigateByUrl('login');

    }
else{
    this.router.navigateByUrl(m.url); 
  }
  }

}
