import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'locations',
        loadChildren: () => import('../locations/locations.module').then( m => m.LocationsPageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryPageModule)
      },
      {
        path: 'meteo',
        loadChildren: () => import('../meteo/meteo.module').then( m => m.MeteoPageModule)
      },
      {
        path: 'new-locations',
        loadChildren: () => import('../new-locations/new-locations.module').then( m => m.NewLocationsPageModule)
      },
      {
        path: 'details-location',
        loadChildren: () => import('../details-location/details-location.module').then( m => m.DetailsLocationPageModule)
      },
      // {path:'/locations', loadChildren:'../locations/locations.module#LocationsPageModule'},
      // {path:'/gallery', loadChildren:'../gallery/gallery.module#GalleryPageModule'},
      // {path:'/meteo', loadChildren:'../meteo/meteo.module#MeteoPageModule'}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}