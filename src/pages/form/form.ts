import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { post } from '../../model/post.model'; 
import { CacheProvider } from '../../providers/cache-provider';
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

  // data we are going to use in cached memory
  private contactIdentity: any = {
     authorTitle: '',
    authorName: '',
    authorFirstName: '',
    authorEmail: ''
  }; 
  // Object that represent the post with the author and the suggestion related to him
  public post :post = {
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
  }


  // We define an empty array of post
  public posts :post[] = [];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public alertCtrl: AlertController,
   public formBuilder: FormBuilder, public cacheService: CacheProvider) {

    // Here we are setting up all the rules according to each fields in our constructor
    this.validForm = formBuilder.group({
      authorTitle: ['', 
          Validators.required
        ],
      authorName: ['', 
          Validators.compose([Validators.maxLength(30), 
          Validators.pattern('[a-zA-Z ]*'), 
          Validators.required])
        ],
      authorFirstName: ['', 
          Validators.compose([Validators.maxLength(30), 
          Validators.pattern('[a-zA-Z ]*'), 
          Validators.required])
        ],
      authorEmail: ['', 
          Validators.compose([Validators.pattern(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/), 
          Validators.required])
        ],
      suggestionTitle: ['',  
          Validators.compose([Validators.maxLength(100), 
           Validators.required])
         ],
      suggestionDetail: ['', 
          Validators.compose([Validators.maxLength(1000), 
          Validators.required])
         ]
    });

    this.getCachedContact();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  // This function allow us to retrieve contact information and save it into cached memory
  getCachedContact() {
      this.cacheService.getCache('contactIdentity').then((contact) => {
          if(contact){
            this.contactIdentity = contact; 
          }
          
          this.validForm.controls['authorName'].setValue(this.contactIdentity.authorName || '');
          this.validForm.controls['authorFirstName'].setValue(this.contactIdentity.authorFirstName || '');
          this.validForm.controls['authorEmail'].setValue(this.contactIdentity.authorEmail || '');
          this.validForm.controls['authorTitle'].setValue(this.contactIdentity.authorTitle || '');
      });
      console.log(this.contactIdentity);
    }



  close(){
    this.viewCtrl.dismiss();
  }

  //Method that allow us to save a post
  savePost(){
    this.formIsNotValid = true;
    if (!this.validForm.valid){
      console.log("Form is not valid");
      this.showAlert();
    }
    else
    {
      console.log("Success");
      this.viewCtrl.dismiss(this.post);
    }
  }

  // this method allow us to show a specific alert when form is not valid
  showAlert(){
    let alert = this.alertCtrl.create({
      title: "Champs non remplis",
      subTitle:"Veuillez s'il vous plait remplir tous les champs ...",
      buttons: ['OK']
    });
    alert.present();
  }



}
