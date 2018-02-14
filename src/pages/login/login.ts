import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from '../../providers/media/media';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../app/interfaces/user';
import {FrontPage} from '../front/front';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = {
    username: '',
    password: '',
    email: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
  }

  login(user){
    this.mediaProvider.login(this.user).
      subscribe(response => {
        console.log(response['token']);
        localStorage.setItem('token', response['token']);
        this.navCtrl.push(FrontPage);
      }, (error: HttpErrorResponse) => {
        console.log(error.error.message);
        //this.status = error.error.message;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if (localStorage.getItem('token') != null) {
      this.mediaProvider.getUserData().subscribe(response => {
          console.log('Welcome ' + response['full_name']);
        }, (error: HttpErrorResponse) => {
          console.log(error);
        },
      );
    }
  }

}
