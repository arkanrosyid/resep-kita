import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-tulis-resep',
  templateUrl: './tulis-resep.page.html',
  styleUrls: ['./tulis-resep.page.scss'],
})
export class TulisResepPage implements OnInit {
  public obj: any = {};
  judul = '';
  bahan = '';
  langkah = '';
  jenis = '';

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    public angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }
  async createResep() {
    const email = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );

    const resep = {
      gambar: this.obj.photoUrl,
      judul: this.judul,
      bahan: this.bahan,
      langkah: this.langkah,
      jenis: this.jenis,
      user: email,
    };

    this.home();

    const resepJSON = JSON.parse(JSON.stringify(resep));
    return this.afs.collection('/Resep').add(resepJSON);
  }

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
