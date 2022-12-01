/* eslint-disable @typescript-eslint/dot-notation */
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/firestore';

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
    private activatedRoute: ActivatedRoute
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
    const docId = this.id.params.id;
    console.log(docId);

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
            doc: e.payload.doc.id,
          })))
      );

    return reseps;
  }

  home() {
    this.router.navigate(['home']);
  }
}
