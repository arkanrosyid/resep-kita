import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-resep-saya',
  templateUrl: './resep-saya.page.html',
  styleUrls: ['./resep-saya.page.scss'],
})
export class ResepSayaPage implements OnInit {
  // resepSaya= "";
  @ViewChild('myList') myList:ElementRef;
  constructor(
    private renderer: Renderer2,
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
      .subscribe((data) =>  { 
      //  var resepSaya = document.getElementById('resepSaya');
       let html = "";
        data.forEach(function (item ,key) {
          
          html+= '<ion-item lines="none" button (click)="resep()">\
          <ion-thumbnail slot="start">\
            <img\
              alt="'+item['judul']+'"\
              src="'+item['gambar']+'"\
            />\
          </ion-thumbnail>\
          <ion-label>'+item['judul']+'</ion-label>\
        </ion-item>';
        console.log(html);
        })
        
      });
      
      
      
  }

  objectValues(obj){
    return Object.keys(obj);
  }
}
