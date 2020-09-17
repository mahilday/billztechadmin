import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../../services/getdata.service";

@Component({
  selector: "app-eachbooking",
  templateUrl: "./eachbooking.component.html",
  styleUrls: ["./eachbooking.component.scss"],
})
export class EachbookingComponent implements OnInit {
  constructor(private getdata: GetDataService) {}

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

  }
  allStages(i) {
    for(let stage =0; stage < this.booking.dosageNumber; stage++){
      if(i === (this.booking.dosageNumber - 1)){
        return 'final stage'
      } else{
        return `stage ${i + 1}`;
      }
    }
  }
  booking: any = this.getdata.bookingedit;
  stages = [];
}
