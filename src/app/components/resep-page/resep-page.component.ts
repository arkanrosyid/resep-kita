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

  editButton = false;

  constructor(public angularFireAuth: AngularFireAuth,
    private router : Router) {}

  ngOnInit() {
    const emailA = this.getEmailA();
  }
  async getEmailA() {
    const emailAuth = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );
    if (this.email === emailAuth) {
      this.editButton = true;
    }

    return emailAuth;
  }

  edit(doc) {
    console.log(true);
    this.router.navigate(['resep-edit/'+doc])
  }
}
