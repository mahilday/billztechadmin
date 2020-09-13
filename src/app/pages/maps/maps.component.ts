import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../../services/getdata.service"
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private getdata: GetDataService, private http: HttpClient) { }

  ngOnInit() {
    this.Data()
    this.getNurses()
      }
      myself = {}
      family = {}
      corp ={}
      allNurses =[]

      Data(){
        if(this.getdata.myselfBool === true){
         this.myself = this.getdata.Myself
        } else{
         this.myself = {}
        }
        if(this.getdata.familyBool === true){
          this.family = this.getdata.Family
        } else{
          this.family = {}
        }
        if(this.getdata.corpBool === true){
          this.corp = this.getdata.Corporate
        } else{
         this.corp = {}
        }
        console.log(this.myself);
        console.log(this.family);
        console.log(this.corp)
      }
      show = false;
      switch(){
        this.show = true;
      }
      getNurses(){
        this.http
          .get(`${environment.baseUrl}/nurses`)
          .toPromise()
          .then((res: any)=>{
            this.allNurses = res.result;
          })
          .catch(err =>{
            console.log('Error', err)
          })
      }

}
