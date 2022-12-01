import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resep-page',
  templateUrl: './resep-page.component.html',
  styleUrls: ['./resep-page.component.scss'],
})
export class ResepPageComponent implements OnInit {
  @Input() judul: string;
  @Input() gambar: string;
  @Input() jenis: string;
  @Input() bahan: string;
  @Input() langkah: string;
  @Input() email: string;
  @Input() doc: string;

  constructor(
    private router: Router,
    public angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    const emailA = this.getEmailA();
  }
   async getEmailA(){
    const emailAuth = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );

    // console.log(emailAuth);
    // console.log(this.email);
    return emailAuth;
  
    
  }
  async edit(){
    const doc = this.doc;
    const emailAuth = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );
    
    console.log("cek");
    if (this.email === emailAuth){
      this.router.navigate(['resep/'+doc]);
      
    }else {
     console.log("false");
     
    }
   
  }
}
