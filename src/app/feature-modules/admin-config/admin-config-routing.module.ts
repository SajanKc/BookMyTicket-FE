import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'city',
        component: MainComponent,
      },
      // {
      //   path: 'cinema',
      //   loadChildren: () =>
      //     import('./cinema/cinema.module').then((m) => m.CinemaModule),
      // },
      // {
      //   path: 'movie',
      //   loadChildren: () =>
      //     import('./movie/movie.module').then((m) => m.MovieModule),
      // },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminConfigRoutingModule {}
