import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: any;
  constructor(
    private router: Router,
    private angularFireAuth :AngularFireAuth,
    private afs :AngularFirestore
    ) {}

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    const email = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );
    this.afs
      .collection('Users', (ref) => ref.where('email', '==', email))
      .snapshotChanges()
      .subscribe((data) => {
        this.users = data.map((e) => ({
          email: e.payload.doc.data()['email'],
          nama: e.payload.doc.data()['name'],
          kemampuan: e.payload.doc.data()['kemampuan'],
        }));
      });
  }
  home() {
    this.router.navigate(['home']);
  }
  login() {
    
  }
}
