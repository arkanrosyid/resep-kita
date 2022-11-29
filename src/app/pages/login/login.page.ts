import { ToastController } from '@ionic/angular';
import {
  login,
  loginSuccess,
  loginFail,
} from './../../store/login/login.actions';
import { AuthService } from './../../services/auth/auth.service';
import { LoginState } from './../../store/login/loginState';
import { show, hide } from './../../store/loading/loading.actions';
import { LoginPageForm } from './login.page.form';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private authservice: AuthService,
    private toastcontroller: ToastController
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.store.select('login').subscribe((loginState) => {
      this.onIsLoggingIn(loginState);
      this.toggleLoading(loginState);
      this.onIsLoggedIn(loginState);
      this.onError(loginState);
    });
  }

  login() {
    this.store.dispatch(login());
  }

  register() {
    this.router.navigate(['register']);
  }

  private onIsLoggingIn(loginState: LoginState) {
    if (loginState.isLoggingIn === true) {
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      this.authservice.login(email, password).subscribe(
        (user) => {
          this.store.dispatch(loginSuccess({ user }));
        },
        (error) => {
          this.store.dispatch(loginFail({ error }));
        }
      );
    }
  }

  private toggleLoading(loginState: LoginState) {
    if (loginState.isLoggingIn) {
      this.store.dispatch(show());
    } else {
      this.store.dispatch(hide());
    }
  }

  private onIsLoggedIn(loginState: LoginState) {
    if (loginState.isLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  private async onError(loginState: LoginState) {
    if (loginState.error) {
      const toaster = await this.toastcontroller.create({
        position: 'bottom',
        message: loginState.error,
        color: 'warning',
      });
      toaster.present();
    }
  }
}
