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
  myself = false;
  family = false;
  corp = false;
  myselfData = []
  famData =[]
  corpData =[]
  AllBool(){
    this.myself = false
    this.corp = false
    this.family = false
  }
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
  }
  ngOnInit() {
    this.All()
  }
  All(){
    this.getMyself();
    this.getFam();
    this.getCorp();
  }
  getMyself(){
    this.http
    .get(`${environment.baseUrl}/my-form`)
    .toPromise()
    .then((res: any)=>{
      this.myselfData = res.result
    }).catch((err)=> {
      console.log('Error', err)
    })
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
      default: 'badge'
        break;
    }
    this.getdata.assigned = this.assigned
  }

  getFam(){
    this.http
    .get(`${environment.baseUrl}/family-form`)
    .toPromise()
    .then((res: any)=>{
      this.famData = res.result
    }).catch((err)=> {
      console.log('Error', err)
    })
  }
  getCorp(){
    this.http
    .get(`${environment.baseUrl}/corporate-form`)
    .toPromise()
    .then((res: any)=>{
      this.corpData = res.result
    }).catch((err)=> {
      console.log('Error', err)
    })
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
