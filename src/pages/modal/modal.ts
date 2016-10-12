import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'modal.html'
})
export class Modal {

    constructor(private alertController: AlertController) { }

    public ionViewDidEnter() {
        let alert = this.alertController.create({
            title: 'Test',
            buttons: [
                {
                    text: 'Something',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    }

}