import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Media} from '../../app/interfaces/media';
import {MediaProvider} from '../../providers/media/media';
/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  file: File;
  media: Media = {
    title: '',
    description: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    const formData = new FormData();
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    formData.append('file', this.file);
    this.mediaProvider.upload(formData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

}
