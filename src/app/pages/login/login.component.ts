import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor( private http: HttpClient, private authService: AuthService) {}
  login = {}
  ngOnInit() {
  }
  ngOnDestroy() {
  }

  Login(){
    this.authService.Login(this.login)
  }

}
