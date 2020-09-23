import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpClient} from '@angular/common/http';
import {GetDataService} from '../../services/getdata.service'

@Component({
  selector: 'app-allvacc',
  templateUrl: './allvacc.component.html',
  styleUrls: ['./allvacc.component.scss']
})
export class AllvaccComponent implements OnInit {

  constructor(private http: HttpClient, private _get: GetDataService) { }
  allVacc=[]

  ngOnInit(): void {
  }
  getvaccDets(vaccId){
    this._get.eachVacc(vaccId)
  }

}
