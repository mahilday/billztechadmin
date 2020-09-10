import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../../services/getdata.service"
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  constructor(private getdata: GetDataService, private http: HttpClient) { }
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
  } 
  FamBool(){
    this.corp = false
    this.myself = false;
    this.family = true
  }
  CorpBool(){
    this.corp = true
    this.myself = false;
    this.family = false
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
      console.log(res) 
      this.myselfData = res.result
      console.log(this.myselfData)
    }).catch((err)=> {
      console.log('Error', err)
    })
  }

  getFam(){
    this.http
    .get(`${environment.baseUrl}/family-form`)
    .toPromise()
    .then((res: any)=>{
      console.log(res) 
      this.famData = res.result
      console.log(this.famData)
    }).catch((err)=> {
      console.log('Error', err)
    })
  }
  getCorp(){
    this.http
    .get(`${environment.baseUrl}/corporate-form`)
    .toPromise()
    .then((res: any)=>{
      console.log(res) 
      this.corpData = res.result
      console.log(this.corpData)
    }).catch((err)=> {
      console.log('Error', err)
    })
  }

}
