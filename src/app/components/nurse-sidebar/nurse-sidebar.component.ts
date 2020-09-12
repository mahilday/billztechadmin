import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/profile', title: 'Profile',  icon: 'ni-circle-08 text-dark', class: '' },
    { path: '/bookings', title: 'Bookings',  icon:'ni-book-bookmark text-dark', class: '' },
    { path: '/history', title: 'History',  icon:'ni-curved-next text-dark', class: '' },
];

@Component({
  selector: 'app-nurse-sidebar',
  templateUrl: './nurse-sidebar.component.html',
  styleUrls: ['./nurse-sidebar.component.scss']
})
export class NurseSidebarComponent implements OnInit {

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
