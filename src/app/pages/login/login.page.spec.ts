import { loginReducer } from './../../store/login/login.reducers';
import { loadingReducer } from './../../store/loading/loading.reducers';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form on ngOnInit', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  });

  // it('should show loading screen and start login when logging in', fakeAsync(() => {
  //   spyOn(router, 'navigate');

  //   fixture.detectChanges();

  //   component.form.get('email').setValue('valid@email.com');
  //   component.form.get('password').setValue('anyPassword');

  //   tick(3500);

  //   expect(router.navigate).toHaveBeenCalledWith(['home']);
  // }));

  // it('should go to register', () => {
  //   spyOn(router, 'navigate');

  //   component.register();

  //   expect(router.navigate).toHaveBeenCalledWith(['register']);
  // });
});
