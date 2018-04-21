import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, UserRegistrationComponent, UserLoginComponent, LogoutComponent, IndexComponent } from './modules/framework/framework.module';
import { GuessStatePracticeComponent } from './modules/chris-norwegian-states/viewes/guess-state-practice/guess-state-practice.component';
import { AuthenticationService } from './modules/framework/services/authentication.service';

const routes: Routes = [
  { path: 'chris-norwegian-states', component: GuessStatePracticeComponent, canActivate: [AuthenticationService] },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationService] },
  { path: 'logout', component: LogoutComponent },

  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
