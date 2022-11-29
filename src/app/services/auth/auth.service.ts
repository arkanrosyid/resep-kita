import { observable, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<User> {
    return new Observable<User>((observer) => {
      setTimeout(() => {
        if (email === 'error@email.com') {
          observer.error('Email not found');
          observer.next();
        } else {
          const user = new User();
          user.email = email;
          user.id = 'newId';
          observer.next(user);
        }
        observer.complete();
      }, 3000);
    });
  }
}
