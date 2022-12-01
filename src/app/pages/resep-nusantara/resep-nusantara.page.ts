import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-resep-nusantara',
  templateUrl: './resep-nusantara.page.html',
  styleUrls: ['./resep-nusantara.page.scss'],
})
export class ResepNusantaraPage implements OnInit {
  reseps: { judul: any; gambar: any; doc: string; }[];
  constructor(private router: Router, private afs: AngularFirestore) {}

  ngOnInit() {
    this.getNusantara();
  }

  home() {
    this.router.navigate(['home']);
  }

  myResep(doc) {
    this.router.navigate(['resep/'+doc]);
  }

  async getNusantara() {
    this.afs
    .collection('Resep', (ref) => ref.where('jenis', '==', 'nusantara'))
    .snapshotChanges()
    .subscribe(
      (data) =>{
            this.reseps = data.map((e) => ({
            judul: e.payload.doc.data()['judul'],
            gambar: e.payload.doc.data()['gambar'],
            doc: e.payload.doc.id,
            }))   ;
                
          }
    );
  }
}
