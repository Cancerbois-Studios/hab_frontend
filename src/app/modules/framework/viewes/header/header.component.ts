import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../framework-export-barrel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

  public navigateTo(url: string) {
    this.globalService.routeTo([url]);
  }

}
