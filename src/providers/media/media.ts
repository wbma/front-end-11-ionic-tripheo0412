import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MediaProvider {

  username: string;
  password: string;
  status: string;

  baseURL = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  public login(user) {

    const setting = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post(this.baseURL + '/login', user, setting);
  }

  public getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token')),
    };
    return this.http.get(this.baseURL + '/users/user', settings);
  }

  public register(user) {
    return this.http.post(this.baseURL + '/users', user);
  }

  upload(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token'))
    };

    return this.http.post(this.baseURL + '/media', formData, settings).subscribe(response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });

  }


}
