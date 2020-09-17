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
  date(data){
    let f = new Date(data).toLocaleString()
    return f
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
  }
  
 
 
  
}
