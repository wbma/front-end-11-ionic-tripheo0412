import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../app/interfaces/user';
import {MediaProvider} from '../../providers/media/media';
import {HttpErrorResponse} from '@angular/common/http';
import {FrontPage} from '../front/front';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: User = {
    username: '',
    password: '',
    email: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
  }

  register() {
    console.log(this.user);
    this.mediaProvider.register(this.user).
      subscribe(response => {
        console.log(response);
        this.mediaProvider.login(this.user).subscribe(response => {
          console.log(response['token']);
          localStorage.setItem('token', response['token']);
          this.navCtrl.push(FrontPage);
        }, (error: HttpErrorResponse) => {
          console.log(error.error.message);
          //this.status = error.error.message;
        });
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
