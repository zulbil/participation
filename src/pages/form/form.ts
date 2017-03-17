import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { post } from '../../model/post.model'; 
/*
  Generated class for the Form page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

  // Navbar color
  navbarColor: string = "navbarcolor";

  bulbColor: string = "bulbColor";

  // this variable will allow us to check wheither or not the form is valid and show an appropriate message
  formIsNotValid: boolean = false;

  // this variable represent our form
  validForm: FormGroup;

  // Object that represent the post with the author and the suggestion related to him
  public post: post = {
    authorTitle: '',
    authorName: '',
    authorFirstName: '',
    authorEmail:'',
    suggestionTitle:'',
    suggestionDetail:'', 
    like: 0, 
    dislike: 0
  };


  // We define an empty array of post
  public posts  = [];
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public formBuilder: FormBuilder) {

    this.validForm = formBuilder.group({
      authorTitle: ['', Validators.required],
      authorName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      authorFirstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      authorEmail: ['', Validators.compose([Validators.pattern(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/), Validators.required])],
      suggestionTitle: ['',  Validators.compose([Validators.maxLength(100), Validators.required])],
      suggestionDetail: ['', Validators.compose([Validators.maxLength(1000), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }


  close(){
    this.viewCtrl.dismiss();
  }

  //Method that allow us to save a post
  savePost(){
    this.formIsNotValid = true;
    if (!this.validForm.valid){
      console.log("Form is not valid");
    }
    else
    {
      console.log("Success");
      this.viewCtrl.dismiss(this.post);
    }
  }



}
