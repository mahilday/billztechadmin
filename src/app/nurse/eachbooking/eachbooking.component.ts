import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../../services/getdata.service";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: "app-eachbooking",
  templateUrl: "./eachbooking.component.html",
  styleUrls: ["./eachbooking.component.scss"],
})
export class EachbookingComponent implements OnInit {
  constructor(private getdata: GetDataService, private _http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.returnStages()
  }
  date(data) {
    let f = new Date(data).toLocaleString();
    return f;
  }

  returnStages(){
    for(let i =0; i<40; i++){
      this.stages.push(i)
    }
  }
  newStages =[]
  changeDosage() {
    this.stages.length = this.booking.dosageNumber;
    console.log(this.stages);
    this.newStages =[...this.stages]
    console.log(this.booking)
  }
  allStages(i) {
    this.stages.length = this.booking.dosageNumber;
    for(let stage =0; stage < this.booking.dosageNumber; stage++){
     
      if(i === (this.booking.dosageNumber - 1)){
        return 'final stage'
      } else{
        return `stage ${i + 1}`;
      }
    }
  }
  updateForMyself(){
    this._http
    .put(`${environment.baseUrl}/updatenursemyself`, this.getdata.bookingedit)
    .toPromise()
    .then((res)=>{
      console.log(res)
      this.toastr.success("booking update successful", 'Success')
     
    })
    .catch(err => {
      this.toastr.error("booking update Error, pls try again", 'Error')
      console.log(err)})
  }
  booking: any = this.getdata.bookingedit;
  stages = [];
}
