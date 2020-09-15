import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {AuthService} from './services/auth.service'
import {GetDataService} from './services/getdata.service'
import {AuthGuard} from './services/auth.guard';
import { NurseLayoutComponent } from './layouts/nurse-layout/nurse-layout/nurse-layout.component';
import {ToastrModule, ToastContainerModule} from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {  
        timeOut: 5000,
        progressBar:true,
        positionClass:'toast-top-right',  
        closeButton: true,  
          
      }  
    ),
    ToastContainerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    NurseLayoutComponent,
  ],
  providers: [AuthGuard, AuthService, GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
