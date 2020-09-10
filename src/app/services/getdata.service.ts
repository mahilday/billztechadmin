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

  myselfData = null

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
  
}
