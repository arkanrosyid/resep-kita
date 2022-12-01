import { Resep } from './../../model/user/Resep';
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resep-edit',
  templateUrl: './resep-edit.page.html',
  styleUrls: ['./resep-edit.page.scss'],
})
export class ResepEditPage implements OnInit {
  reseps: any;
  obj: any;
  resepForm: Resep;
  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore
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
    this.afs
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
  }

  editResep() {}

  onFileSelect(input) {
    console.log(input.files);
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.obj.photoUrl = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
