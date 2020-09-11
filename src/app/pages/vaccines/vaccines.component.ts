import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {

  constructor() { }
  allDoses =[]
  vaccine ={
    vaccdes:{
      givenhowquest:"How is it given?",
      dosages: this.allDoses
    }
  }
 
  dosage ={
    patientdosages:{}
  }

  ngOnInit(): void {
  }
  addDose=()=>{
    this.allDoses.push(this.dosage)
    console.log(this.vaccine)
  }

}
