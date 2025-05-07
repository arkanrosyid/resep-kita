import { logout } from './../../store/login/login.actions';
import { AppState } from './../../store/AppState';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit, OnDestroy {
  subscribe: Subscription;
  users: any;
  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.getUser();
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
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
    this.subscribe.unsubscribe();
    logout();
    this.router.navigate(['login']);
  }
}
