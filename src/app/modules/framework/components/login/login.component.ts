import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public login() {
    this.authenticationService.login(this.username,this.password).subscribe(() => {
      console.log('Logged in!');
    });
  }

}
