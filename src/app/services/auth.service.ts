import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import { NgForm, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = false;
  constructor(private http: HttpClient, private router: Router){

  }
  Login(login){
    this.http
      .post(`${environment.baseUrl}/login`, login)
      .toPromise()
      .then((res: any)=>{
       
        console.log(res)
        localStorage.setItem('user', JSON.stringify(login));
        localStorage.setItem('token', res.token);
        if(res.result.role === "admin"){
          this.router.navigateByUrl('/')
        } else{
          this.router.navigateByUrl('/maps')
        }
        this.isAuthenticate = true;
        return this.isAuthenticate
      }).catch((err)=> {
        this.isAuthenticate = false;
        return this.isAuthenticate
      })
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
}