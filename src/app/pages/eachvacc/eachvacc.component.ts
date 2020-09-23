import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GetDataService } from '../../services/getdata.service'

@Component({
  selector: 'app-eachvacc',
  templateUrl: './eachvacc.component.html',
  styleUrls: ['./eachvacc.component.scss']
})
export class EachvaccComponent implements OnInit {

  constructor(private _get: GetDataService) { }
  eachvacc = {}

  ngOnInit(): void {
    this.eachvacc = this._get.eachvaccine
  }

}
