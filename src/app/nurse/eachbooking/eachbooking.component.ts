import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/getdata.service'


@Component({
  selector: 'app-eachbooking',
  templateUrl: './eachbooking.component.html',
  styleUrls: ['./eachbooking.component.scss']
})
export class EachbookingComponent implements OnInit {

  constructor(private getdata: GetDataService) { }

  ngOnInit(): void {
  }
  date(data){
    let f = new Date(data).toLocaleString()
    return f
  }
  booking = this.getdata.bookingedit

}
