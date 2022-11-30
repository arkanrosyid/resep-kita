import { UserRegister } from './../../model/user/UserRegister';
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
              observer.error(error);
              observer.complete();
            });
        });
    });
  }

  register(userRegister: UserRegister): Observable<void> {
    return new Observable<void>((observer) => {
      setTimeout(() => {
        if (userRegister.email === 'error@email.com') {
          observer.error({ message: 'email sudah dipakai' });
        } else {
          observer.next();
        }
      }, 3000);
    });
  }
}
