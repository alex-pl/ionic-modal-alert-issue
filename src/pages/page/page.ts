import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Modal } from '../modal/modal';

@Component({
    templateUrl: 'page.html'
})
export class Page {

    constructor(private modalController: ModalController) { }

    open() {
        let modal = this.modalController.create(Modal);

        modal.onDidDismiss(() => {
            console.log('callback');
        });

        modal.present();
    }

}