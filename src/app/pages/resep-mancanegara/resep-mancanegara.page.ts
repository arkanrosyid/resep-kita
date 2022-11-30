import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resep-mancanegara',
  templateUrl: './resep-mancanegara.page.html',
  styleUrls: ['./resep-mancanegara.page.scss'],
})
export class ResepMancanegaraPage implements OnInit {
  constructor(private router: Router, private afs: AngularFirestore) {}

  ngOnInit() {
    this.getMancanegara();
  }

  home() {
    this.router.navigate(['home']);
  }

  resep() {
    this.router.navigate(['resep']);
  }

  async getMancanegara() {
    const resep = await this.afs
      .collection('Resep', (ref) => ref.where('jenis', '==', 'mancanegara'))
      .valueChanges()
      .subscribe((data) => console.log(data));
  }
}
