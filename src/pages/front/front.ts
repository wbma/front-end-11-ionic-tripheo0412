import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from '../../providers/media/media';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginPage} from '../login/login';

/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class FrontPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrontPage');
    if (localStorage.getItem('token') != null) {
      this.mediaProvider.getUserData().subscribe(response => {
        console.log('Welcome ' + response['full_name']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.navCtrl.push(LoginPage);
      });
    }
  }

}
