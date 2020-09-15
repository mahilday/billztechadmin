import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {GetDataService} from '../../services/getdata.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor(private _auth: AuthService, private router: Router, private getdata: GetDataService) { }

  ngOnInit(): void {
  }
  nurse = this._auth.loginDets
  date(data){
    let f = new Date(data).toLocaleString()
    return f
  }
  formEdit=(data)=>{
    this.router.navigateByUrl(`edit_booking/${data._id}`)
    this.getdata.bookingedit = data
  }
}
