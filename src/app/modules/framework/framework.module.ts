import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpReqsService } from './services/http-reqs.service';
import { AuthenticationService } from './services/authentication.service';
import { CommonFunctionsService } from './services/common-functions.service';
import { GlobalService } from './services/global.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './viewes/home/home.component';
import { UserRegistrationComponent } from './viewes/user-registration/user-registration.component';
import { UserLoginComponent } from './viewes/user-login/user-login.component';
import { HeaderComponent } from './viewes/header/header.component';
import { IndexComponent } from './viewes/index/index.component';
import { LogoutComponent } from './viewes/logout/logout.component';
import { PropercasePipe } from './pipes/propercase.pipe';
import { TimesPipe } from './pipes/times.pipe';
import { FooterComponent } from './viewes/footer/footer.component';
import { BoxViewerComponent } from './components/box-viewer/box-viewer.component';

export {
  HttpReqsService,
  AuthenticationService,
  CommonFunctionsService,
  GlobalService,
  HomeComponent,
  UserRegistrationComponent,
  UserLoginComponent,
  HeaderComponent,
  FooterComponent,
  BoxViewerComponent,
  LogoutComponent,
  IndexComponent
};
export { JwtTokenHeader, JwtTokenPayload } from './interfaces/jwttoken';
export { HttpDefined } from './interfaces/http-defined';




@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    HeaderComponent,
    IndexComponent,
    LogoutComponent,
    PropercasePipe,
    TimesPipe,
    FooterComponent,
    BoxViewerComponent
  ],
  providers: [
    HttpReqsService,
    AuthenticationService,
    CommonFunctionsService,
    GlobalService
  ],
  exports: [
    HomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    BoxViewerComponent
  ]
})
export class FrameworkModule { }
