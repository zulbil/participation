import {Component,transition, animate, keyframes, trigger, style} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { post } from '../../model/post.model';
/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html', 
  animations : [
    trigger('likeAnimation', [
          transition('inactive <=> active', [
           animate('1s linear', keyframes([
               style({ opacity: 0.2, offset: 0.2}), 
               style({ opacity: 0.4, offset: 0.4}),
               style({ opacity: 1, offset: 1}) 
          ]))
        ])
    ]), 
    trigger('dislikeAnimation', [
          transition('inactive <=> active', [
           animate('1s linear', keyframes([
               style({ opacity: 0.2, offset: 0.2}), 
               style({ opacity: 0.4, offset: 0.4}),
               style({ opacity: 1, offset: 1}) 
          ]))
        ])
    ])

  ]
})
export class DetailPage {

  navbarcolor:string = "navbarcolor";

  greenColor:string = "darkgreen";

  redColor:string = "darkred";

  greyColor: string = "grey";

  post: post = {
    authorTitle: '',
    authorName: '',
    authorFirstName: '',
    authorEmail: '',
    suggestionTitle: '',
    suggestionDetail: '',
    like : 0, 
    dislike : 0, 
    hasLiked: false, 
    hasDisliked: false
  };

  hasLiked: boolean = false;

  hasDisliked: boolean = false;

  like: any = 0; 
  dislike: any = 0; 

  showRatingBar: boolean = false; 

  likeState: string = "inactive";

  dislikeState: string = "inactive";  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
    this.hasDisliked = this.post.hasLiked;
    this.hasLiked = this.post.hasDisliked;

    console.log(this.post);
    this.initChart();
  }

  ionViewDidLoad() {
    this.initChart();
    console.log(this.showRatingBar);
  }

  ionViewWillLeave() {
    this.post.hasLiked; 
    this.post.hasDisliked;
  }


  // To like a post
  dolike(){
    this.post.like++; 
    this.redColor = this.greyColor;
    this.post.hasLiked = true; 
    this.likeState = (this.likeState === 'inactive' ? 'active' : 'inactive'); 
    this.initChart();
  }

  // To dislike a post
  doDislike(){
    this.post.dislike++;
    this.greenColor = this.greyColor;
    this.post.hasDisliked = true; 
    this.dislikeState = (this.dislikeState === 'inactive' ? 'active' : 'inactive'); 
    this.initChart();
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

       if(like === "NaN" && dislike === "NaN" ){
         this.showRatingBar = false; 
         return;
       }

       else if (like === "0" && dislike === "0") {
          this.showRatingBar = false; 
          return; 
       }

       else {
         this.showRatingBar = true; 
       }

  }
}
