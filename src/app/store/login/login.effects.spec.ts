// import { login, loginSuccess } from './login.actions';
// import { User } from './../../model/user/User';
// import { AuthService } from './../../services/auth/auth.service';
// import { StoreModule } from '@ngrx/store';
// import { TestBed } from '@angular/core/testing';
// import { Actions, EffectsModule } from '@ngrx/effects';
// import { Observable, of, throwError } from 'rxjs';
// import { LoginEffects } from './login.effects';
// import { provideMockActions } from '@ngrx/effects/testing';

// describe('login effects', () => {
//   let effects: LoginEffects;
//   let actions$: Observable<Actions>;
//   let error: { error: 'error' };
//   const user = new User();
//   user.id = 'anyUserId';

//   const authServiceMock = {
//     login: (email: string, password: string) => {
//       if (email === 'error@email.com') {
//         return throwError(error);
//       }
//       return of(user);
//     },
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         StoreModule.forRoot([]),
//         EffectsModule.forRoot([]),
//         EffectsModule.forFeature([LoginEffects]),
//       ],
//       providers: [provideMockActions(() => actions$)],
//     }).overrideProvider(AuthService, { userValue: authServiceMock });

//     effects = TestBed.get(LoginEffects);
//   });

//   it('should login', (done) => {
//     actions$ = of(login({ email: 'valid@email.com', password: 'anyPassword' }));

//     effects.login$.subscribe((newAction) => {
//       expect(newAction).toEqual(loginSuccess({ user }));
//     });
//   });
// });
