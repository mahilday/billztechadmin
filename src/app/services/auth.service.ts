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
  loginDets = {
    bookings: null,
    name: '',
    email: '',
    role: '',
    state: '',
    localgovt: '',
    address: '',
    phone:'',
    education: ''
  }
  mybookings=[]
  myself(){
    this.http
    .post(`${environment.baseUrl}/getvacc`, this.loginDets)
    .toPromise()
    .then((res: any)=>{
      console.log('done')
      console.log(res)
      this.mybookings = res.result
    })
    .catch(()=>{
      console.log('not done')
    })
  }
  checkMyselfAssigned: any = null;
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
          this.router.navigateByUrl('profile')
        }
        this.loginDets.bookings = res.result.bookings;
        this.loginDets.name = res.result.name;
        this.loginDets.email = res.result.email;
        this.loginDets.role = res.result.role;
        this.loginDets.state = res.result.state;
        this.loginDets.localgovt = res.result.localgovt;
        this.loginDets.address = res.result.address;
        this.loginDets.phone = res.result.phone;
        this.loginDets.education = res.result.education
        
        this.isAuthenticate = true;
        this.myself()
        return this.isAuthenticate
      }).catch((err)=> {
        this.isAuthenticate = false;
        return this.isAuthenticate
      })
  }
  loginLocal : any =()=>{
    this.http
      .post(`${environment.baseUrl}/login`, JSON.parse(window.localStorage.getItem('user')))
      .toPromise()
      .then((res: any)=>{
        console.log(res)
        if(res.result.role === "admin"){
          this.router.navigateByUrl('/')
        } else{
          this.router.navigateByUrl('profile')
        }
        this.myself()
        this.loginDets.bookings = res.result.bookings;
        this.loginDets.name = res.result.name;
        this.loginDets.email = res.result.email;
        this.loginDets.role = res.result.role;
        this.loginDets.state = res.result.state;
        this.loginDets.localgovt = res.result.localgovt;
        this.loginDets.address = res.result.address;
        this.loginDets.phone = res.result.phone;
        this.loginDets.education = res.result.education
        this.isAuthenticate = true;
        this.myself()
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