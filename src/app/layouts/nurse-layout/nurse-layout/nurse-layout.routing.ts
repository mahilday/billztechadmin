import { Routes } from '@angular/router';

import { BookingsComponent } from '../../../nurse/bookings/bookings.component';
import { HistoryComponent } from '../../../nurse/history/history.component';
import { ProfileComponent } from '../../../nurse/profile/profile.component';
import {EachbookingComponent} from '../../../nurse/eachbooking/eachbooking.component'

export const NurseLayoutRoutes: Routes = [
    { path: 'history',          component: HistoryComponent },
    { path: 'bookings',       component: BookingsComponent },
    { path: 'profile',       component: ProfileComponent },
    { path: 'edit_booking/:id',       component: EachbookingComponent }
];