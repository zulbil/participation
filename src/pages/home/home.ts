import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FormPage } from '../form/form';
import { DetailPage } from '../detail/detail';
import Moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  navbarcolor: string = "navbarcolor";

  bulbColor: string = "bulbColor";

  background: string = "mybackground";

  postIsEmpty: boolean = true;

  posts = [];

  date: string;

  like: number = 0;

  dislike: number = 0;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      this.posts = [
        {
          authorTitle: 'monsieur',
          authorName: 'Khang',
          authorFirstName: 'Joel Alexandre',
          authorEmail:'alexkhang25@yahoo.fr',
          suggestionTitle:'Refection de la paroisse Saint André de Bourg ',
          suggestionDetail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lobortis odio et sagittis. Vivamus malesuada ipsum libero, porta malesuada leo pellentesque id. Donec risus velit, laoreet fringilla elementum consequat, semper a tortor. Suspendisse feugiat pharetra metus in cursus. Aliquam id magna porta, accumsan purus egestas, ultrices sapien. Praesent vestibulum tortor sem, id eleifend eros iaculis eu. Quisque posuere sollicitudin nisl. Maecenas vitae mauris porttitor, iaculis odio nec, tristique mi. Cras ac urna risus. Vivamus sed fringilla lorem. Maecenas vitae justo ipsum. Ut mi lacus, congue sit amet sem sed, convallis tempor nibh.'
        }
      ]
      this.init();
      this.getCurrentDate();
  }

  init(){
    if(this.posts.length >= 0)
    {
      this.postIsEmpty = false;
    }
  }

  getCurrentDate(){
    Moment.locale();
    this.date = Moment().format('l');
    return this.date;
  }

  fillInformation(){
    let modal = this.modalCtrl.create(FormPage);

    modal.onDidDismiss((info) => {
      console.log(info);
      if(info != undefined){
        this.postIsEmpty = false;
        this.posts.push(info);
      }

    });
    modal.present();
  }

  moreDetail(post){
    this.navCtrl.push(DetailPage , {post: post});
  }

  dolike(e){
      this.like++;
  }

  doDislike(e){
    this.dislike++;
  }
}
