import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { JwtTokenHeader, JwtTokenPayload } from '../interfaces/jwttoken';
import { HttpDefined } from '../interfaces/http-defined';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  private token;
  private tokenHeader: JwtTokenHeader;
  private tokenPayload: JwtTokenPayload;

  public login(username, password) {
    let reqOption: HttpDefined = {
      requestResource: 'http://skjoldtoft.dk/daniel/hab/index.php',
      data: {class: "authentication",
      method: "login", username: username, password: password },
      statusCode: [200]
    };

    let headers = new HttpHeaders();
    let retval = this.http.post(reqOption.requestResource, reqOption.data, { headers: headers, observe: 'response' }).map((response: HttpResponse<Object>) => {
      if (reqOption.statusCode.indexOf(response.status) > -1) {
        let data = response.body;
        this.token = data[0];
        console.log('setting token!');
        localStorage.setItem('jwttoken', this.token);
        this.setTokenInfo();
      } else {
        return Observable.throw("Unexpected answer: " + response.status + " : " + response.statusText + " : " + response.body);
      }
    }).catch((error: HttpResponse<any>) => {
      if (reqOption.statusCode.indexOf(error.status) > -1) {
        console.log(error);
        return error.body;
      } else {
        return Observable.throw("Unexpected error: " + error.status + " : " + error.statusText + " : " + error.body);
      }
    });
    return retval;
  }

  private setTokenInfo() {
    let splitToken = this.token.split('.');
    this.tokenHeader = JSON.parse(atob(splitToken[0]));
    this.tokenPayload = JSON.parse(atob(splitToken[1]));
  }

  public getToken() {
    if(this.token == null || this.token == undefined) {
      return '';
    } else {
      return this.token;
    }
  }

  public isAuth() {
    this.token = localStorage.getItem('jwttoken');
    if(this.token == null || this.token == undefined) {
      return false;
    } else {
      return true;
    }
  }

}
