import { UserRegister } from './../../model/user/UserRegister';
import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { register, registerFail, registerSuccess } from './register.actions';

@Injectable()
export class RegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap((payload: { userRegister: UserRegister }) =>
        this.authService.register(payload.userRegister).pipe(
          map(() => registerSuccess()),
          catchError((error) => of(registerFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
