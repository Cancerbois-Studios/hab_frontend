import { Component, OnInit } from '@angular/core';
import { HttpReqsService } from '../../services/http-reqs.service';
import { HttpDefined } from '../../interfaces/http-defined';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token = "";

  constructor(private httpReqs: HttpReqsService) { }

  ngOnInit() {
    let reqOption: HttpDefined = {
      requestResource: 'http://skjoldtoft.dk/daniel/hab/index.php',
      data: {class: "jwtToken",
      method: "getJwtToken"},
      statusCode: [200]
    };
    this.httpReqs.sendPostRequest(reqOption).subscribe(data => {
      //console.log(data);
      this.token = data[0];
    });
  }

}
