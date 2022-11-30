/* eslint-disable @typescript-eslint/dot-notation */
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  resep: any;

  constructor(
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async getResep() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    loader.present();

    try {
      this.firestore
        .collection('Resep')
        .snapshotChanges()
        .subscribe((data) => {
          this.resep = data.map((e) => ({
            id: e.payload.doc.id,
            judul: e.payload.doc.data()['judul'],
            jenis: e.payload.doc.data()['jenis'],
          }));

          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
}
