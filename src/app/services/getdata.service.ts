import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService{
  constructor(private http: HttpClient){

  }

  bookingedit ={}

 myselfBool = true
 familyBool = null
 corpBool = null
 assigned = false

  Myself={}
  Family ={}
  Corporate ={}

  myselfData = []
  famData =[]
  corpData = []

  getMyself: any =()=>{
    this.http
    .get(`${environment.baseUrl}/my-form`)
    .toPromise()
    .then((res: any)=>{
      this.myselfData = res.result
    }).catch((err)=> {
      console.log('Error', err)
    })
    this.getFam();
    this.getCorp();
  }
  
  getFam: any=()=>{
    this.http
    .get(`${environment.baseUrl}/family-form`)
    .toPromise()
    .then((res: any)=>{
      this.famData = res.result
    }).catch((err)=> {
      console.log('Error', err)
    })
  }
  getCorp: any=()=>{
    this.http
    .get(`${environment.baseUrl}/corporate-form`)
    .toPromise()
    .then((res: any)=>{
      this.corpData = res.result
    }).catch((err)=> {
      console.log('Error', err)
    })
  }

}
