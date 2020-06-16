import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsLocationPage } from './details-location.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsLocationPageRoutingModule {}
