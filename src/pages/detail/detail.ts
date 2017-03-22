import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { post } from '../../model/post.model';
/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  navbarcolor:string = "navbarcolor";

  greenColor:string = "darkgreen";

  redColor:string = "darkred";

  greyColor: string = "grey";

  post: post;

  hasLiked: boolean = false;

  hasDisliked: boolean = false;

  like: any = 0; 
  dislike: any = 0; 



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
    console.log(this.post);
    
  }

  ionViewDidLoad() {
    this.initChart();
  }

  // To like a post
  dolike(){
    this.post.like++;
    this.hasLiked = true;
    this.greenColor = "grey";
  }

  // To dislike a post
  doDislike(){
    this.post.dislike++;
    this.hasDisliked = true;
    this.redColor = "grey";
  }

  // A method to intialize a rating bar
  initChart() {
      var percentageLike = (this.post.like / (this.post.like + this.post.dislike))*100;   
      var percentage = percentageLike.toFixed(0);
      var like = percentage; 
      this.like = like; 
      console.log("like :"+this.like ); 

       var percentageDislike = (this.post.dislike / (this.post.like + this.post.dislike))*100;  
       var dislike = percentageDislike.toFixed(0);
       this.dislike = dislike;
       console.log("dislike: "+this.dislike); 
  }
}
