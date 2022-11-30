import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { login, loginFail, loginSuccess } from './login.actions';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((payload: { email: string; password: string }) =>
        this.authService.login(payload.email, payload.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) =>
            of(loginFail({ error: 'Email atau password salah' }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
