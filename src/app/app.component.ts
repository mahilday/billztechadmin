import { Component, OnInit, DoCheck } from '@angular/core';
import {AuthService} from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Inocul8';

  constructor(private _auth: AuthService){

  }
  ngOnInit(){
    this._auth.loginLocal().then(()=>{
      console.log('any')
    })
  }
}
