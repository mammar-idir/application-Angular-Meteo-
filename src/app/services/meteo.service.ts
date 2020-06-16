import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor( public http:HttpClient
    ) { }


    public getData(city:string){
      return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=2d51941a288def229c850619454440cc');
    }
}
