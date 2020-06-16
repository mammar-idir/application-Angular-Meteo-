import { Component, OnInit } from '@angular/core';
import { Place } from '../modele/location.modele';
import {Geolocation} from '@ionic-native/geolocation/ngx'
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-new-locations',
  templateUrl: './new-locations.page.html',
  styleUrls: ['./new-locations.page.scss'],
})
export class NewLocationsPage implements OnInit {

  constructor(private geolocation:Geolocation,
              private locService:LocationService,
              private router:Router,
              private navContr:NavController
    ) { }

  ngOnInit() {
    
  }
  
  onAddLocation(data:Place){
    data.timestamp = new Date().getTime();
    data.photos=[];
    this.geolocation.getCurrentPosition().then((resp) =>{
      data.coordinates ={
        longitude : resp.coords.longitude,
        latitude : resp.coords.latitude

      }
      this.locService.addLocation(data);
      this.navContr.back();

    });
    

  }
}
