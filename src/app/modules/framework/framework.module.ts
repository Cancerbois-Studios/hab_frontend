import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './viewes/login/login.component';
import { HttpReqsService } from './services/http-reqs.service';
import { HttpClient } from '@angular/common/http/src/client';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent],
  providers: [
    HttpReqsService
  ],
  exports: [
    LoginComponent
  ]
})
export class FrameworkModule { }
