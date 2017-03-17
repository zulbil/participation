import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';
import { DetailPage } from '../detail/detail';
import Moment from 'moment';
import { post } from '../../model/post.model'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  navbarcolor: string = "navbarcolor";

  bulbColor: string = "bulbColor";

  background: string = "mybackground";

  postIsEmpty: boolean = true;

  posts: post[] = [];

  date: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
      this.posts = [
        {
          authorTitle: 'monsieur',
          authorName: 'Khang',
          authorFirstName: 'Joel Alexandre',
          authorEmail:'alexkhang25@yahoo.fr',
          suggestionTitle:'Refection de la paroisse Saint André de Bourg ',
          suggestionDetail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lobortis odio et sagittis. Vivamus malesuada ipsum libero, porta malesuada leo pellentesque id. Donec risus velit, laoreet fringilla elementum consequat, semper a tortor. Suspendisse feugiat pharetra metus in cursus. Aliquam id magna porta, accumsan purus egestas, ultrices sapien. Praesent vestibulum tortor sem, id eleifend eros iaculis eu. Quisque posuere sollicitudin nisl. Maecenas vitae mauris porttitor, iaculis odio nec, tristique mi. Cras ac urna risus. Vivamus sed fringilla lorem. Maecenas vitae justo ipsum. Ut mi lacus, congue sit amet sem sed, convallis tempor nibh.', 
          like: 10, 
          dislike: 4, 
          hasLiked: false, 
          hasDisliked: false
        }, 
        {
          authorTitle: 'monsieur',
          authorName: 'Kacky',
          authorFirstName: 'Pascal',
          authorEmail:'alexkhang25@yahoo.fr',
          suggestionTitle:'Mise en place d\'une plateforme de jeu pour les enfants démunis de l\'orphelinat des soeurs Jésuites',
          suggestionDetail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lobortis odio et sagittis. Vivamus malesuada ipsum libero, porta malesuada leo pellentesque id. Donec risus velit, laoreet fringilla elementum consequat, semper a tortor. Suspendisse feugiat pharetra metus in cursus. Aliquam id magna porta, accumsan purus egestas, ultrices sapien. Praesent vestibulum tortor sem, id eleifend eros iaculis eu. Quisque posuere sollicitudin nisl. Maecenas vitae mauris porttitor, iaculis odio nec, tristique mi. Cras ac urna risus. Vivamus sed fringilla lorem. Maecenas vitae justo ipsum. Ut mi lacus, congue sit amet sem sed, convallis tempor nibh.', 
          like: 4, 
          dislike: 2, 
          hasLiked: false, 
          hasDisliked: false
        }
      ]
      this.init();
      this.getCurrentDate();
      console.log(this.posts);
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

  dolike(post){
      post.like++;
      post.hasLiked = true; 
  }

  doDislike(post){
     post.dislike++; 
     post.hasDisliked = true;
  }
}
