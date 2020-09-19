import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {GetDataService} from '../../services/getdata.service'
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor(private _auth: AuthService, private _http:HttpClient, private router: Router, private getdata: GetDataService) { }

  ngOnInit(): void {
    
  }
  nurse: any = this._auth.loginDets
  myselfbookings =this._auth.mybookings
  fambookings = this._auth.fambookings
  corpbookings = this._auth.corpbookings
  date(data){
    let f = new Date(data).toLocaleString()
    return f
  }
  myself = true;
  family = false;
  corp = false;
  FamBool(){
    this.myself = false;
    this.family =true;
    this.corp = false;
    this.getdata.myselfBool = false;
    this.getdata.familyBool = true;
    this.getdata.corpBool = false
  }
  CorpBool(){
    this.myself = false;
    this.family = false;
    this.corp = true;
    this.getdata.myselfBool = false;
    this.getdata.familyBool = false;
    this.getdata.corpBool = true
  }
  MyselfBool(){
    this.myself = true;
    this.family = false;
    this.corp = false;
    this.getdata.myselfBool = true;
    this.getdata.familyBool = false;
    this.getdata.corpBool = false
  }
  checkMyselfAssigned = function(){
    for(let i =0; i< this.myselfbookings.length; i++){
      if(this.myselfbookings[i].vaccinationStatus === "assigned"){
        this.nurse.done = false;
      } else{
        this.nurse.done = true;
      }
    }
  }
  formEdit=(data)=>{
    this.router.navigateByUrl(`edit_booking/${data._id}`)
    this.getdata.bookingedit = data
    console.log(data)
  }
  
 
 
  
}
