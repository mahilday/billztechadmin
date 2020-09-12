import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  allDoses =[]
  niceBrands =[]
  vaccine ={
    vaccdes:{
      givenhowquest:"How is it given?",
      dosages: this.allDoses,
      brands:{
        brandquest:"When should I boost my vaccination?: It is recommended you revaccinate every 10 years",
        branddes:`Please note: prices are for a single dose and all brand are safe and effective against this vaccine`,
        brandtype: this.niceBrands
      }
    }
  }
 
  dosage ={
    patientdosages:{}
  }
  brand={}
 

  ngOnInit(): void {
  }
  addDose=(e, dose: NgForm)=>{
    this.allDoses.push(this.dosage)
    // dose.resetForm = function(){ return null}
    console.log(this.allDoses, dose)
  }
  Brand =(e, brand: NgForm)=>{
    this.niceBrands.push(brand.value);
    brand.reset()
    console.log(this.niceBrands, brand.value)
  }

  submitVacc(){
    this.http
      .post(`${environment.baseUrl}/vaccines`, this.vaccine)
      .toPromise()
      .then((res)=>{
        console.log(res)
      })
      .catch(err =>{
        console.log('Error', err)
      })
  }

}
