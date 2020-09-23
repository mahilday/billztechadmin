import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {GetDataService} from '../../services/getdata.service'
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private _get: GetDataService) { }
  allBookings = []
  todayBookingarr = []
  weekBookingarr = []
  monthBookingarr =[]
  today = true;
  week = false;
  month = false;
  todayBool(){
    this.today = true;
    this.week = false;
    this.month = false;
  }
  weekBool(){
    this.today = false;
    this.week = true;
    this.month = false;
  }
  monthBool(){
    this.today = false;
    this.week = false;
    this.month = true;
  }
  ngOnInit() {
    this.today = true;
    this.week = false;
    this.month = false;
  }
  
  ArrLength = null
  checkForBookings=()=>{
    let newBookingArr = this._get.myselfData.concat(this._get.famData, this._get.corpData)
    this.allBookings = this._get.myselfData.concat(this._get.famData, this._get.corpData)
    this.ArrLength = newBookingArr.length
    this.weekBookings()
    this.todayBookings();
    this.monthBookings();
    return this.ArrLength
  }
 todayBookings(){
  this.todayBookingarr =this.allBookings.filter(function (e) {
    return new Date(e.timestamp).toLocaleDateString() === new Date().toLocaleDateString();
});
 }
 weekBookings(){
  this.weekBookingarr =this.allBookings.filter(function (e) {
    return new Date(e.timestamp).toLocaleDateString() >= new Date(1600215998767).toLocaleDateString();
});
 }
 monthBookings(){
  this.monthBookingarr =this.allBookings.filter(function (e) {
    return new Date(e.timestamp).toLocaleDateString() >= new Date(1598229251593).toLocaleDateString();
});
 }
 formatDate(date){
   return new Date(date).toLocaleDateString()
 }

}
