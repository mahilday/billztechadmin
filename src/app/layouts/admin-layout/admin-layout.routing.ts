import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { VaccinesComponent } from '../../pages/vaccines/vaccines.component'
import { AdminGuard } from '../../services/admin.guard';
import { AllvaccComponent } from '../../pages/allvacc/allvacc.component'
import { EachvaccComponent } from '../../pages/eachvacc/eachvacc.component'


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AdminGuard]},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AdminGuard]},
    { path: 'tables',         component: TablesComponent, canActivate: [AdminGuard] },
    { path: 'icons',          component: IconsComponent, canActivate: [AdminGuard] },
    { path: 'maps',           component: MapsComponent,canActivate: [AdminGuard] },
    { path: 'vaccines',       component: VaccinesComponent, canActivate: [AdminGuard] },
    { path: 'icons/:id',       component: MapsComponent, canActivate: [AdminGuard]},
    { path: 'all-vaccines',       component: AllvaccComponent, canActivate: [AdminGuard]},
    { path: 'all-vaccines/:id',       component: EachvaccComponent, canActivate: [AdminGuard]}
];
