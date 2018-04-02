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
  public fullscreenToggle: boolean = false;

  constructor() { }

  ngOnInit() {
    this.amounts = [1, 6, 12, 24];
    this.amountSelected = this.amounts[3];
  }

  public onViewChanges(_amount) {

    var innerElements = document.getElementsByClassName("pic-div") as HTMLCollectionOf<HTMLElement>;

    switch (+_amount) {
      case 1:
        this.cssElementsCheck(true, "600px", "100%");
        break;
      case 6:
        this.cssElementsCheck(true, "200px", "200px");
        break;
      case 12:
        this.cssElementsCheck(false, "150px", "150px");
        break;
      case 24:
        this.cssElementsCheck(false, "100px", "100px");
        break;
      default:
        break;
    }

  }

  private cssElementsCheck(_fullscreenToggle, _height, _fillerHeight) {
    setTimeout(() => {
      let container = document.getElementsByClassName("grid-container")[0] as HTMLElement;
      var elements = document.getElementsByClassName("grid-item") as HTMLCollectionOf<HTMLElement>;
      var innerElements = document.getElementsByClassName("pic-div") as HTMLCollectionOf<HTMLElement>;

      this.fullscreenToggle = _fullscreenToggle;

      for (let i = 0; i < this.amountSelected; i++) {
        elements[i].style.height = _height;
        if (_fullscreenToggle && innerElements[i].classList.contains("pic-div-hover")) {
          innerElements[i].classList.remove("pic-div-hover");
        } else {
          innerElements[i].classList.add("pic-div-hover");
        }
      }
      container.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(" + _fillerHeight + ", 1fr))");
    }, 0);
  }

}
