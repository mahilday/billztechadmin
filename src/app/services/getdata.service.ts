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


 myselfBool = null
 familyBool = null
 corpBool = null
 assigned = false

  Myself={}
  Family ={}
  Corporate ={}
}
