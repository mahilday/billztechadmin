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
    this.myself()
  }
  nurse = this._auth.loginDets
  bookings =[]
  date(data){
    let f = new Date(data).toLocaleString()
    return f
  }
  myself(){
    this._http
    .post(`${environment.baseUrl}/getvacc`, this.nurse)
    .toPromise()
    .then((res: any)=>{
      console.log('done')
      this.bookings = res.result
    })
    .catch(()=>{
      console.log('not done')
    })
  }
  formEdit=(data)=>{
    this.router.navigateByUrl(`edit_booking/${data._id}`)
    this.getdata.bookingedit = data
  }
}
