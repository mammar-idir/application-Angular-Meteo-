import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contact ={
    nom:'mammar',
    email:'mammar@gmail.com',
    tel:'0752437632',
    logo:'assets/images/img4.jpeg',
    image:'assets/images/img5.jpeg'
  }

  constructor() {}

}
