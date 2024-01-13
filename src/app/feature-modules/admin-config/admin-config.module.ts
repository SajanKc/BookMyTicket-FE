import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { HeaderComponent } from './dashboard/components/layout/header/header.component';
import { SidenavComponent } from './dashboard/components/layout/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CityComponent } from './dashboard/components/pages/city/city.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    CityComponent,
  ],
  imports: [CommonModule, AdminConfigRoutingModule, MaterialModule],
})
export class AdminConfigModule {}
