/* eslint-disable @typescript-eslint/dot-notation */
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-resep',
  templateUrl: './resep.page.html',
  styleUrls: ['./resep.page.scss'],
})
export class ResepPage implements OnInit {
  reseps: any;
  private id;

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    public angularFireAuth: AngularFireAuth
  ) {
    this.activatedRoute.paramMap.subscribe((data) => {
      // console.log(data);
      this.id = data;
    });
  }

  ngOnInit() {
    this.getResep();
  }
  async getResep() {
    const emailAuth = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );

    const docId = this.id.params.id;
    

    const reseps = this.afs
      .collection('Resep', (ref) => ref.where('__name__', '==', docId))
      .snapshotChanges()
      .subscribe(
        (data) =>
          (this.reseps = data.map((e) => ({
            judul: e.payload.doc.data()['judul'],
            gambar: e.payload.doc.data()['gambar'],
            jenis: e.payload.doc.data()['jenis'],
            bahan: e.payload.doc.data()['bahan'],
            langkah: e.payload.doc.data()['langkah'],
            email: e.payload.doc.data()['user'],
            doc: e.payload.doc.id,
          })))
      );

    return reseps;
  }

  home() {
    this.router.navigate(['home']);
  }
}
