import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = false;
  constructor(private http: HttpClient){

  }
  Login(login){
    this.http
      .post(`${environment.baseUrl}/login`, login)
      .toPromise()
      .then((res: any)=>{
        this.isAuthenticate = true;
        console.log(res)
        return this.isAuthenticate
      }).catch((err)=> {
        this.isAuthenticate = false;
        return this.isAuthenticate
      })
  }
  
}