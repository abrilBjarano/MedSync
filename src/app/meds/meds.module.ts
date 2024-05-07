import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedsRoutingModule } from './meds-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateEditPageComponent } from './pages/create-edit-page/create-edit-page.component';
import { MedPageComponent } from './pages/med-page/med-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    CreateEditPageComponent,
    MedPageComponent
  ],
  imports: [
    CommonModule,
    MedsRoutingModule,
    MaterialModule,
  ]
})
export class MedsModule { }
