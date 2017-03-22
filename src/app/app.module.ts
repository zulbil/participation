import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { DetailPage } from '../pages/detail/detail';
import { ProgressbarComponent } from '../components/progressbar/progressbar';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    DetailPage, 
    ProgressbarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    DetailPage, 
    ProgressbarComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
