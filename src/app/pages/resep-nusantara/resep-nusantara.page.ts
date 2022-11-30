import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-resep-nusantara',
  templateUrl: './resep-nusantara.page.html',
  styleUrls: ['./resep-nusantara.page.scss'],
})
export class ResepNusantaraPage implements OnInit {
  constructor(private router: Router, private afs: AngularFirestore) {}

  ngOnInit() {
    this.getNusantara();
  }

  home() {
    this.router.navigate(['home']);
  }

  resep() {
    this.router.navigate(['resep']);
  }

  async getNusantara() {
    const resep = await this.afs
      .collection('Resep', (ref) => ref.where('jenis', '==', 'nusantara'))
      .valueChanges()
      .subscribe((data) => console.log(data));
  }
}
