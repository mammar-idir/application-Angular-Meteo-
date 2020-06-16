import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Place } from '../modele/location.modele';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations: Array<Place>;
  constructor(private locationService: LocationService,
    private router:Router,
    private alertControl:AlertController
    ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
   this.onGetLocations();
  }

  onNewLocation(){
    this.router.navigateByUrl('/menu/new-locations');


  }

  async onRemove(p:Place){
    
  

    let alert = await this.alertControl.create({
      header: 'Confirmation',
      message: 'Etes vous sûre?',
      buttons: [
        {
          text: 'Oui',
          
          handler: () => {
           
    this.removeLocation(p);
    // this.onGetLocations();
          }
        },
        {
          text: 'Non',
          handler: () => {
           
          }
        }
      ]
    });
    await alert.present();




  }
  removeLocation(p:Place){
    let index = this.locations.indexOf(p);
    this.locations.splice(index,1);


  }

  onGetLocations(){
    this.locationService.getLocations().then(data => {
      this.locations = data;
    });
  }

  onDetails(p:Place){
    this.locationService.currentLocation=p;
    this.router.navigateByUrl('/menu/details-location');
  }
}
