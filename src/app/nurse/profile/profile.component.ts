import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {NgForm, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _auth: AuthService) { }
 
  ngOnInit(): void {
}
nurseDets = this._auth.loginDets

}
