import { Resep } from './../../model/user/Resep';
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-resep-edit',
  templateUrl: './resep-edit.page.html',
  styleUrls: ['./resep-edit.page.scss'],
})
export class ResepEditPage implements OnInit {
  reseps: any;
  obj: any;
  resepForm: Resep;
  image : string;
  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private router : Router,
    public angularFireAuth: AngularFireAuth
  ) {
    this.activatedRoute.paramMap.subscribe((data) => {
     
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
          {
            this.reseps = data.map((e) => ({
            judul: e.payload.doc.data()['judul'],
            gambar: e.payload.doc.data()['gambar'],
            jenis: e.payload.doc.data()['jenis'],
            bahan: e.payload.doc.data()['bahan'],
            langkah: e.payload.doc.data()['langkah'],
            email: e.payload.doc.data()['user'],
            doc: e.payload.doc.id,
          }));
        
          this.image = this.reseps[0].gambar;
        }
         
          
      );
      
  
  }

  editResep() {
    
    var judul =(document.getElementById('judul') as HTMLInputElement).value;
    var bahan =(document.getElementById('bahan') as HTMLInputElement).value;
    var langkah =(document.getElementById('langkah') as HTMLInputElement).value;
    var jenis =(document.getElementById('jenis') as HTMLInputElement).value;
    // if (this.obj.photoUrl === null){
    //   this.obj.photoUrl = this.image;
    // }

    const docId = this.id.params.id;
   
    const resepL = this.afs.collection('Resep').doc('/' + docId)
    resepL.update({judul : judul});
    resepL.update({bahan : bahan});
    resepL.update({langkah : langkah});
    resepL.update({jenis : jenis});
    resepL.update({gambar :  this.image});
    
  }

  onFileSelect(input) {

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {

       this.image = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  home (){
    const docId = this.id.params.id;
    this.router.navigate(['/resep/'+ docId]);
  }

  deleteResep(){
    const docId = this.id.params.id;
    const resepL = this.afs.collection('Resep').doc('/' + docId);
    resepL.delete();
    this.router.navigate(['/home']);

  }
}
