import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NurseLayoutRoutes } from './nurse-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookingsComponent } from '../../../nurse/bookings/bookings.component';
import { HistoryComponent } from '../../../nurse/history/history.component';
import { ProfileComponent } from '../../../nurse/profile/profile.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NurseLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
   BookingsComponent,
   HistoryComponent,
   ProfileComponent
  ]
})
export class NurseLayoutModule { }