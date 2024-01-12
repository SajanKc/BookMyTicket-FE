import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { HeaderComponent } from './dashboard/components/header/header.component';
import { SidenavComponent } from './dashboard/components/sidenav/sidenav.component';
import { MainComponent } from './dashboard/components/main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, AdminConfigRoutingModule, MaterialModule],
})
export class AdminConfigModule {}
