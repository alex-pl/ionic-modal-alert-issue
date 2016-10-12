import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page } from '../pages/page/page';
import { Modal } from '../pages/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    Page,
    Modal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page,
    Modal
  ],
  providers: []
})
export class AppModule {}
