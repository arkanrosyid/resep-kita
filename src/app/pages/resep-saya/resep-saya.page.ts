import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-resep-saya',
  templateUrl: './resep-saya.page.html',
  styleUrls: ['./resep-saya.page.scss'],
})
export class ResepSayaPage implements OnInit {
  constructor(
    private router: Router,
    private afs: AngularFirestore,
    public angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.getResep();
  }

  home() {
    this.router.navigate(['home']);
  }

  resep() {
    this.router.navigate(['resep']);
  }

  async getResep() {
    const email = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );
    const resep = await this.afs
      .collection('Resep', (ref) => ref.where('user', '==', email))
      .valueChanges()
      .subscribe((data) => console.log(data));
  }
}
