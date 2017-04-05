import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';
import { DetailPage } from '../detail/detail';
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

  post: post; 

  date: string;

  darkgreen: string = "darkgreen"; 

  darkred: string = "darkred"; 


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
      this.posts = [
        {
          authorTitle: 'monsieur',
          authorName: 'Khang',
          authorFirstName: 'Joel Alexandre',
          authorEmail:'alexkhang25@yahoo.fr',
          suggestionTitle:'Refection de la paroisse Saint André de Bourg en face du quartier generale de la mairie de Nemours ',
          suggestionDetail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lobortis odio et sagittis. Vivamus malesuada ipsum libero, porta malesuada leo pellentesque id. Donec risus velit, laoreet fringilla elementum consequat, semper a tortor. Suspendisse feugiat pharetra metus in cursus. Aliquam id magna porta, accumsan purus egestas, ultrices sapien. Praesent vestibulum tortor sem, id eleifend eros iaculis eu. Quisque posuere sollicitudin nisl. Maecenas vitae mauris porttitor, iaculis odio nec, tristique mi. Cras ac urna risus. Vivamus sed fringilla lorem. Maecenas vitae justo ipsum. Ut mi lacus, congue sit amet sem sed, convallis tempor nibh.',
          like: 10,
          dislike: 8,
          hasLiked: false,
          hasDisliked: false
        },
        {
          authorTitle: 'monsieur',
          authorName: 'Kacky',
          authorFirstName: 'Pascal',
          authorEmail:'alexkhang25@yahoo.fr',
          suggestionTitle:'Mise en place d\'une plateforme de jeu pour les enfants démunis de l\'orphelinat des soeurs Jésuites de la paroisse St Anne',
          suggestionDetail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lobortis odio et sagittis. Vivamus malesuada ipsum libero, porta malesuada leo pellentesque id. Donec risus velit, laoreet fringilla elementum consequat, semper a tortor. Suspendisse feugiat pharetra metus in cursus. Aliquam id magna porta, accumsan purus egestas, ultrices sapien. Praesent vestibulum tortor sem, id eleifend eros iaculis eu. Quisque posuere sollicitudin nisl. Maecenas vitae mauris porttitor, iaculis odio nec, tristique mi. Cras ac urna risus. Vivamus sed fringilla lorem. Maecenas vitae justo ipsum. Ut mi lacus, congue sit amet sem sed, convallis tempor nibh.',
          like: 4,
          dislike: 7,
          hasLiked: false,
          hasDisliked: false
        }
      ]
      this.init();
      console.log(this.posts);
  }

  init(){
    if(this.posts.length > 0)
    {
       console.log(this.posts.length);
      this.postIsEmpty = false;
    }
    else {
      this.postIsEmpty = true; 
    }
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
      if(post.hasDisliked != true){ return; }
       else {
         post.dislike--; 
         post.hasDisliked = false; 
       }

  }

  doDislike(post){
     post.dislike++;
     post.hasDisliked = true; 
     if(post.hasLiked != true){
      return; 
     }
     else {
       post.like--; 
       post.hasLiked = false; 
     }  
  }

}
