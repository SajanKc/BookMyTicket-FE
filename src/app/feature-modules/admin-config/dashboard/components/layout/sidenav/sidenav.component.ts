import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  sidebarMenus: Array<any> = new Array<any>(
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard',
    },
    {
      name: 'City',
      icon: 'photo',
      url: '/admin/dashboard/city',
    },
    {
      name: 'Cinema',
      icon: 'photo',
      url: '/admin/cinema',
    },
    { name: 'Movie', icon: 'photo', url: '/admin/movie' },
    {
      name: 'Settings',
      icon: 'settings',
      url: '',
    }
  );
}
