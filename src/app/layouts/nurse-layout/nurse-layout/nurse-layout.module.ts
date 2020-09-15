import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NurseLayoutRoutes } from './nurse-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookingsComponent } from '../../../nurse/bookings/bookings.component';
import { HistoryComponent } from '../../../nurse/history/history.component';
import { ProfileComponent } from '../../../nurse/profile/profile.component';
import { EachbookingComponent } from '../../../nurse/eachbooking/eachbooking.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NurseLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
    // NgbModule
  ],
  declarations: [
   BookingsComponent,
   HistoryComponent,
   ProfileComponent,
   EachbookingComponent
  ]
})
export class NurseLayoutModule { }