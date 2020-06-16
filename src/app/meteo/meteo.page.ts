import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
city:string;
private dataMeteo;
  constructor(public serviceMeteo:MeteoService) { }

  ngOnInit() {
  }

  onLoadMeteo(){
   this.serviceMeteo.getData(this.city)
    .subscribe(FormData =>{
      this.dataMeteo=FormData;
    },error =>{ console.log(error)});


  }

}
