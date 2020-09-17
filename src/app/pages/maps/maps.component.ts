import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from "../../services/getdata.service"
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';  
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  // @ViewChild(ToastContainerDirective, { static: true })
  // toastContainer: ToastContainerDirective;


  constructor(private getdata: GetDataService, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
    this.Data()
    this.getNurses()
      }
      myself = {}
      family = {}
      corp ={}
      searchText =''
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
      show = true;
      switch(){
        this.show = false;
        console.log(this.show)
      }
      updateMy(){
        this.http
          .put(`${environment.baseUrl}/updatemyadmin`, this.myself)
          .toPromise()
          .then((res)=>{
            this.show = true;
            this.toastr.success("Booking update successful")
            console.log(res, this.myself)
          })
          .catch((err)=>{
            this.toastr.error("Booking Error Notification", 'Error')
          })
      }
      onSwitch(nurse, myself){
        if(confirm('Are you sure you want to assign the booking to ' + nurse.name + ' who lives in ' + nurse.localgovt + ', ' + nurse.state)){
          nurse.newassigned_id = myself._id
          this.http
            .put(`${environment.baseUrl}/updatenursebooking`, nurse)
            .toPromise()
            .then((res)=>{
              this.toastr.success("Booking update successful")
            })
            .catch(err =>{
              this.toastr.error("Booking Error Notification", 'Error')
            })
        }
      }
      getNurses(){
        this.http
          .get(`${environment.baseUrl}/nurses`)
          .toPromise()
          .then((res: any)=>{
            this.allNurses = res.result;
            console.log(this.allNurses)
          })
          .catch(err =>{
            console.log('Error', err)
          })
      }

}
