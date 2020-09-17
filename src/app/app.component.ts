import { Component, OnInit, DoCheck } from '@angular/core';
import {AuthService} from './services/auth.service'
import { GetDataService } from './services/getdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Inocul8';

  constructor(private _auth: AuthService, private _get: GetDataService){

  }
  ngOnInit(){
    this._auth.loginLocal().then(()=>{
      console.log('any')
    })
    this._get.getMyself()
    this._get.getFam()
    this._get.getCorp()
    this._auth.checkMyselfAssigned()
   
  }
}
