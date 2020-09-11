import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }
  register = {}

  ngOnInit() {
  }
  submit(){
    this.http
    .post<any>(`${environment.baseUrl}/user`, this.register)
    .toPromise()
    .then((res)=>{
      console.log(res)
    })
    .catch( err => console.log('Error', err))
  }

}
