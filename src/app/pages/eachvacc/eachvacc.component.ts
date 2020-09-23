import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GetDataService } from '../../services/getdata.service'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-eachvacc',
  templateUrl: './eachvacc.component.html',
  styleUrls: ['./eachvacc.component.scss']
})
export class EachvaccComponent implements OnInit {

  constructor(private _get: GetDataService, private _http: HttpClient) { }
  eachvacc = {
    description:{
      brands:{
        brandtype:[]
      }
    }
  }

  ngOnInit(): void {
    this.eachvacc = this._get.eachvaccine
  }
  brand ={}
  updateVacc =() =>{
    this._http
    .put(`${environment.baseUrl}/updatevacc`, this.eachvacc[0])
    .toPromise()
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=> console.log(err))
  }
  addBrand=()=>{
    this.eachvacc[0].description.brands.brandtype.push(this.brand)
  }
  delBrand=(i)=>{
    this.eachvacc[0].description.brands.brandtype.splice(i, 1)
  }
}
