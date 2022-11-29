import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string): Observable<User> {
    return new Observable<User>((observer) => {
      this.auth
        .setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
        .then(() => {
          this.auth
            .signInWithEmailAndPassword(email, password)
            .then((firebaseUser: firebase.default.auth.UserCredential) => {
              observer.next({ email, id: firebaseUser.user.uid });
              observer.complete();
            })
            .catch((error) => {
              observer.error('Email or Password Wrong');
              observer.complete();
            });
        });
    });
  }
}
