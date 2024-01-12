import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientConfigRoutingModule } from './client-config-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientConfigRoutingModule
  ]
})
export class ClientConfigModule { }
