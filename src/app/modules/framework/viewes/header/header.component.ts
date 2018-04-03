import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../framework-export-barrel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuOpened: boolean = false;
  public buttonRow: any[];

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.buttonRow = [['CNS','/chris-norwegian-states'],['Register','/register'],['Login','/login'],['Logout','/logout'],['Home','/home']];
  }

  public navigateTo(url: string) {
    this.globalService.routeTo([url]);
  }

  public openMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
