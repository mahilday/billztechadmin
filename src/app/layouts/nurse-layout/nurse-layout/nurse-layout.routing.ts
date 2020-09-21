import { Routes } from '@angular/router';

import { BookingsComponent } from '../../../nurse/bookings/bookings.component';
import { HistoryComponent } from '../../../nurse/history/history.component';
import { ProfileComponent } from '../../../nurse/profile/profile.component';
import {EachbookingComponent} from '../../../nurse/eachbooking/eachbooking.component'
import { NurseGuard } from '../../../services/nurse.guard';

export const NurseLayoutRoutes: Routes = [
    { path: 'history',          component: HistoryComponent, canActivate: [NurseGuard] },
    { path: 'bookings',       component: BookingsComponent, canActivate: [NurseGuard] },
    { path: 'profile',       component: ProfileComponent, canActivate: [NurseGuard] },
    { path: 'edit_booking/:id',       component: EachbookingComponent, canActivate: [NurseGuard] }
];