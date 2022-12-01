/* eslint-disable @typescript-eslint/dot-notation */
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-resep-saya',
  templateUrl: './resep-saya.page.html',
  styleUrls: ['./resep-saya.page.scss'],
})
export class ResepSayaPage implements OnInit {
  reseps: any;

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    private activatedRoute: ActivatedRoute
  ) {
    //   this.activatedRoute.paramMap.subscribe((data) => {
    //     console.log(data)
    // })
  }

  ngOnInit() {
    this.getResep();
  }

  home() {
    this.router.navigate(['home']);
  }

  myResep(doc) {
    // console.log(doc);

    this.router.navigate(['resep/' + doc]);
  }

  async getResep() {
    const email = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );
    this.afs
      .collection('Resep', (ref) => ref.where('user', '==', email))
      .snapshotChanges()
      .subscribe((data) => {
        this.reseps = data.map((e) => ({
          judul: e.payload.doc.data()['judul'],
          gambar: e.payload.doc.data()['gambar'],
          doc: e.payload.doc.id,
        }));
      });
  }
}
