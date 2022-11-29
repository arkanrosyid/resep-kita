import { environment } from './../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { AuthService } from './../../services/auth/auth.service';
import { hide } from './../../store/loading/loading.actions';
import { LoadingState } from './../../store/loading/LoadingState';
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
import { AppState } from './../../store/AppState';
import { loginReducer } from './../../store/login/login.reducers';
import { loadingReducer } from './../../store/loading/loading.reducers';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';

import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/model/user/User';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  let page;
  let store: Store<AppState>;
  let authService: AuthService;
  let toastController: ToastController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer),
        StoreModule.forFeature('login', loginReducer),
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    store = TestBed.get(Store);
    authService = TestBed.get(AuthService);
    toastController = TestBed.get(ToastController);

    page = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form on ngOnInit', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  });

  it('should show loading screen and start login when logging in', () => {
    spyOn(authService, 'login').and.returnValue(new Observable(() => {}));
    fixture.detectChanges();

    component.form.get('email').setValue('valid@email.com');
    component.form.get('password').setValue('anyPassword');
    page.querySelector('#loginButton').click();
    store.select('loading').subscribe((loadingState) => {
      expect(loadingState.show).toBeTruthy();
    });
    store.select('login').subscribe((loginState) => {
      expect(loginState.isLoggingIn).toBeTruthy();
    });
  });

  it('should hide loading and change status to logged in, and then go to home page', () => {
    spyOn(router, 'navigate');
    spyOn(authService, 'login').and.returnValue(of(new User()));
    fixture.detectChanges();

    component.form.get('email').setValue('valid@email.com');
    component.form.get('password').setValue('anyPassword');
    page.querySelector('#loginButton').click();
    store.select('loading').subscribe((loadingState) => {
      expect(loadingState.show).toBeFalsy();
    });
    store.select('login').subscribe((loginState) => {
      expect(loginState.isLoggedIn).toBeTruthy();
    });
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should hide loading and show error message', () => {
    spyOn(authService, 'login').and.returnValue(
      throwError({ message: 'error' })
    );
    spyOn(toastController, 'create').and.returnValue(
      <any>Promise.resolve({ present: () => {} })
    );
    fixture.detectChanges();

    component.form.get('email').setValue('valid@email.com');
    component.form.get('password').setValue('anyPassword');
    page.querySelector('#loginButton').click();

    store.select('loading').subscribe((loadingState) => {
      expect(loadingState.show).toBeFalsy();
    });

    expect(toastController.create).toHaveBeenCalledTimes(1);
  });

  it('should go to register', () => {
    spyOn(router, 'navigate');

    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
