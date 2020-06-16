import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Place } from '../modele/location.modele';

@Component({
  selector: 'app-details-location',
  templateUrl: './details-location.page.html',
  styleUrls: ['./details-location.page.scss'],
})
export class DetailsLocationPage implements OnInit {
private currentPlace:Place;
  constructor(private locationService:LocationService) { }

  ngOnInit() {
    this.currentPlace=this.locationService.currentLocation;
  }

}
