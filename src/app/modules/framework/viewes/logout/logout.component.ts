import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../framework-export-barrel';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private globalService: GlobalService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.globalService.routeTo(['/index']);
  }

}
