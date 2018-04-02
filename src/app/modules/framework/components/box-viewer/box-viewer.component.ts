import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-viewer',
  templateUrl: './box-viewer.component.html',
  styleUrls: ['./box-viewer.component.css']
})
export class BoxViewerComponent implements OnInit {
  @Input() showFilter?= false;

  public amounts: any[];
  public amountSelected: number;

  constructor() { }

  ngOnInit() {
    this.amounts = [6, 12, 24];
    this.amountSelected = this.amounts[2];
  }

  public onViewChanges(_amount) {
    setTimeout(() => {
      let container = document.getElementsByClassName("grid-container")[0] as HTMLElement;
      var elements = document.getElementsByClassName("grid-item") as HTMLCollectionOf<HTMLElement>;

      switch (+_amount) {
        case 6:
          for (let i = 0; i < _amount; i++) {
            elements[i].style.height = "200px";
          }
          container.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(200px, 1fr))");
          break;
        case 12:
          for (let i = 0; i < _amount; i++) {
            elements[i].style.height = "150px";
          }
          container.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(150px, 1fr))");
          break;
        case 24:
          for (let i = 0; i < _amount; i++) {
            elements[i].style.height = "100px";
          }
          container.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(100px, 1fr))");
          break;
        default:
          break;
      }
    }, 0);
  }

}
