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

  bookingedit: any ={}

 myselfBool = true
 familyBool = false
 corpBool = false
 assigned = false

  Myself={}
  Family ={}
  Corporate ={}

  myselfData = []
  famData =[]
  corpData = []
  loading = false

  getMyself: any =()=>{
    this.loading= true
    this.http
    .get(`${environment.baseUrl}/my-form`)
    .toPromise()
    .then((res: any)=>{
      this.myselfData = res.result
      this.loading= false
    }).catch((err)=> {
      console.log('Error', err)
      this.loading = false;
    })
    this.getFam();
    this.getCorp();
  }
  
  getFam: any=()=>{
    this.loading = true;
    this.http
    .get(`${environment.baseUrl}/family-form`)
    .toPromise()
    .then((res: any)=>{
      this.famData = res.result
      this.loading = false;
    }).catch((err)=> {
      console.log('Error', err)
      this.loading = false;
    })
  }
  loadNav = false
  getCorp: any=()=>{
    this.loading = true;
    this.http
    .get(`${environment.baseUrl}/corporate-form`)
    .toPromise()
    .then((res: any)=>{
      this.corpData = res.result
      this.loading = false;
    }).catch((err)=> {
      console.log('Error', err)
      this.loading = false;
    })
  }
  nurses = null
  getNurses =()=>{
    this.http
      .get(`${environment.baseUrl}/allnurses`)
      .toPromise()
      .then((res: any)=>{
        this.nurses = res.result.length
      })
      .catch((err)=>{
        console.log('Error', err)
      })
  }

}
