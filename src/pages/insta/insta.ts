import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera'
import { Dialogs } from '@ionic-native/dialogs';
import { Instagram } from '@ionic-native/instagram'


/**
 * Generated class for the InstaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-insta',
  templateUrl: 'insta.html',
})
export class InstaPage {

  base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private camera: Camera, private dialog: Dialogs, private instagram: Instagram) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstaPage');
  }

  options: CameraOptions = {
    quality: 100,
    correctOrientation: true,
    targetWidth: 720,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  instaShare() {
    this.dialog.prompt("Enter Caption", "Insta-Share", ["yes", "no"], "", )
    .then((obj) => {
      if (obj.buttonIndex == 1) {
        this.instagram.share(this.base64Image, obj.input1)
        .then(() => {
          let toast = this.toastCtrl.create({
            message: 'Shared',
            duration: 1000,
            position: 'bottom'
          });
        
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
        
          toast.present();
        }, (err) => {
          let toast = this.toastCtrl.create({
            message: err,
            duration: 1000,
            position: 'bottom'
          });
        
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
        
          toast.present();
        });
      }      
    })
  }

}
