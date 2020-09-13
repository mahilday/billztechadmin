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
  register = {
    state:''
  }
  localgovt =[]
  states=[]
  ngOnInit() {
    this.getState()
  }
  getState = () => {
    this.http
      .get(`${environment.baseUrl}/states`)
      .toPromise()
      .then((res: any) => {
        for(let v = 0; v < res.result.length; v++){
          const statesne = res.result[v].states;
          console.log(statesne)
          for (let i = 0; i < statesne.length; i++) {
            this.states.push(statesne[i].state.name);
          }
        }
        
        console.log(res.result, this.states);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  lgaLoading = false
  getLga = () => {
    this.lgaLoading = true
    this.http
    .get(
        `${environment.baseUrl}/states`
      )
      .toPromise()
      .then((res: any) => {
        this.lgaLoading = false
        console.log(res)
        for(let v = 0; v < res.result.length; v++){
          const statesne = res.result[v].states;
          for (let i = 0; i < statesne.length; i++) {
            if(this.register.state === statesne[i].state.name ){
                
              this.localgovt = statesne[i].state.locals
              
            } else{
              console.log("not done")
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
