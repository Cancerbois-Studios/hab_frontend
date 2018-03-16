import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-viewer',
  templateUrl: './box-viewer.component.html',
  styleUrls: ['./box-viewer.component.css']
})
export class BoxViewerComponent implements OnInit {

  public boxes = 20;

  constructor() { }

  ngOnInit() {
  }

  public addBox() {
    this.boxes++;
  }

}
