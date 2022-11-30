import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tulis-resep',
  templateUrl: './tulis-resep.page.html',
  styleUrls: ['./tulis-resep.page.scss'],
})
export class TulisResepPage implements OnInit {
  public obj: any = {};
  judul: string = "";
  bahan: string = "";
  langkah: string = "";
  jenis: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }
  createResep(){
    var gambar = this.obj.photoUrl;
    var judul = this.judul;
    var bahan = this.bahan;
    var langkah = this.langkah;
    var jenis = this.jenis;
    var user = "arkan@mail.com";
    
    

    this.home();
  }
  

  onFileSelect(input) {
    console.log(input.files);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.obj.photoUrl = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
}
