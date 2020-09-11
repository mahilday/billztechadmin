import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-dark', class: '' },
    { path: '/icons', title: 'Bookings',  icon:'ni-planet text-dark', class: '' },
    { path: '/vaccines', title: 'Add Vaccine',  icon:'ni-pin-3 text-dark', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-dark', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-dark', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-dark', class: '' },
    { path: '/register', title: 'Add admins',  icon:'ni-circle-08 text-dark', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
