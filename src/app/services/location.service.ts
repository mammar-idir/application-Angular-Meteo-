import { Injectable } from '@angular/core';
import { Place } from '../modele/location.modele';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import {Storage} from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
private locations:Array<Place>=[];
public currentLocation:Place;
  constructor(private storage:Storage) { 
   



  }

  public getLocations(){
    // this.storage.get("locations").then(value =>{
    //   this.locations=value;
    // })
    // return this.locations;
    return this.storage.get("locations").then(data =>{
      this.locations=data!=null?data:[];
      return this.locations.slice();
    });
  }
  public addLocation(place:Place){
    this.locations.push(place);
    this.storage.set("locations",this.locations);
  }
updateLocations(locations){
  this.storage.set("locations",locations);
}
  // removeLocation(p:Place){
  //   let index = this.locations.indexOf(p);
  //   this.locations.splice(index,1); 
  //   this.storage.set("locations",this.locations);

  // }
}
