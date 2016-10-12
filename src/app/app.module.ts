import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page } from '../pages/page/page';

@NgModule({
  declarations: [
    MyApp,
    Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page
  ],
  providers: []
})
export class AppModule {}
