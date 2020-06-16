import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsLocationPageRoutingModule } from './details-location-routing.module';

import { DetailsLocationPage } from './details-location.page';
import{AgmCoreModule} from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8edYmdVQLbhHf3crT__tqBMXNfnELJXs'
     }),
    FormsModule,
    IonicModule,
    DetailsLocationPageRoutingModule
  ],
  declarations: [DetailsLocationPage]
})
export class DetailsLocationPageModule {}

// codewars.com
