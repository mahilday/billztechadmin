import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../../services/getdata.service"
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private getdata: GetDataService) { }

  ngOnInit() {
    this.Data()
      }
      myself = {}
      family = {}
      corp ={}

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

}
