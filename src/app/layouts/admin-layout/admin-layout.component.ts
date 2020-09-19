import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms'
import {AuthService} from '../../services/auth.service'
import { GetDataService } from '../../services/getdata.service'
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  ngOnInit() {
  }
  public showOverlay = true;

  constructor(private router: Router, private _auth: AuthService, private _get: GetDataService) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }
  
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }


}
