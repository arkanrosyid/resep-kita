import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resep-mancanegara',
  templateUrl: './resep-mancanegara.page.html',
  styleUrls: ['./resep-mancanegara.page.scss'],
})
export class ResepMancanegaraPage implements OnInit {
  reseps: { judul: any; gambar: any; doc: string; }[];
  constructor(private router: Router, private afs: AngularFirestore) {}

  ngOnInit() {this.getMancanegara();}

 
  home() {
    this.router.navigate(['home']);
  }

  myResep(doc) {
    this.router.navigate(['resep/'+doc]);
  }

  async getMancanegara() {
    this.afs
    .collection('Resep', (ref) => ref.where('jenis', '==', 'mancanegara'))
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
