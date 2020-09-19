import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../../services/getdata.service"
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router"

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  constructor(private getdata: GetDataService, private http: HttpClient, private router: Router) { }
  myself = true;
  family = false;
  corp = false;
  myselfData = []
  famData =[]
  corpData =[]
  // boolean part to enable clicks
  MyselfBool(){
    this.myself = true
    this.corp = false
    this.family = false
    this.getdata.myselfBool = true;
    this.getdata.familyBool = false;
    this.getdata.corpBool = false;
  } 
  FamBool(){
    this.corp = false
    this.myself = false;
    this.family = true;
    this.getdata.myselfBool = false;
    this.getdata.familyBool = true;
    this.getdata.corpBool = false;
  }
  CorpBool(){
    this.corp = true
    this.myself = false;
    this.family = false;
    this.getdata.myselfBool = false;
    this.getdata.familyBool = false;
    this.getdata.corpBool = true;
    console.log(this.myselfData, this.famData, this.corpData)
  }
  ngOnInit() {
    this.myselfData = this.getdata.myselfData
    this.famData = this.getdata.famData
    this.corpData = this.getdata.corpData
    this.getdata.getMyself();
      }
  assigned = false
  switchClass(data){
    switch (data.vaccinationStatus) {
      case 'assigned':
        this.assigned = true
        return 'text-info'
        break;
      case 'unassigned':
        this.assigned = false
        return 'text-danger'
        break;
      case 'done':
        this.assigned = false
        return 'text-success'
        break;
      default: 'text-muted'
        break;
    }
    this.getdata.assigned = this.assigned
  }

   
 
  clickNext(data){
    this.router.navigateByUrl(`icons/${data._id}`)
    if(this.myself === true){
      this.getdata.Myself = data
    } else{
      this.getdata.Myself = {}
    }
    if(this.family === true){
      this.getdata.Family = data
    } else{
      this.getdata.Family = {}
    }
    if(this.corp === true){
      this.getdata.Corporate = data
      console.log(this.getdata.Corporate)
    } else{
      this.getdata.Corporate = {}
    }
   
  }

}
