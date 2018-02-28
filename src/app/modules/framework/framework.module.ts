import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './viewes/login/login.component';
import { HttpReqsService } from './services/http-reqs.service';
import { AuthenticationService } from './services/authentication.service';
import { CommonFunctionsService } from './services/common-functions.service';
import { HttpClient } from '@angular/common/http/src/client';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent],
  providers: [
    HttpReqsService,
    AuthenticationService,
    CommonFunctionsService
  ],
  exports: [
    LoginComponent
  ]
})
export class FrameworkModule { }
