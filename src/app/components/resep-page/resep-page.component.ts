import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  constructor(public angularFireAuth: AngularFireAuth) {}

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

    console.log(emailAuth);
    console.log(this.email);
    return emailAuth;
  }

  edit() {
    console.log(true);
  }
}
