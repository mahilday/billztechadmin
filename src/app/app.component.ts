import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service'
import { GetDataService } from './services/getdata.service'

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  title="Inocul8"

  public showOverlay = true;

  constructor(private router: Router, private _auth: AuthService, private _get: GetDataService) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }
  ngOnInit(){
    this._auth.loginLocal().then(()=>{
      console.log('any')
    })
    this._get.getMyself()
    this._auth.checkMyselfAssigned()
   
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
