import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { VaccinesComponent } from '../../pages/vaccines/vaccines.component'
import { AuthGuard } from '../../services/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard]},
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent, canActivate: [AuthGuard] },
    { path: 'maps',           component: MapsComponent },
    { path: 'vaccines',       component: VaccinesComponent }
];
