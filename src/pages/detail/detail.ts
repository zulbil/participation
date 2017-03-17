import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
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

  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;

  doughnutChart:any;

  navbarcolor:string = "navbarcolor";

  greenColor:string = "darkgreen";

  redColor:string = "darkred";

  greyColor: string = "grey";

  post: any;

  like: number = 15;

  hasLiked: boolean = false;

  dislike: number = 9;

  hasDisliked: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
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

  // A method to intialize a chart 
  initChart() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Défavorable", "Favorable"],
        datasets: [{
          label: '# of Likes',
          data: [this.post.dislike, this.post.like],
          backgroundColor: [
            'rgb(139, 0, 0)',
            'rgb(0, 100, 0)'
          ],
          hoverBackgroundColor: [
            "#8B0000",
            "#006400"
          ]
        }]
      }
    });

  }
}
