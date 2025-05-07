import { ToastController, NavController } from '@ionic/angular';
import { login } from './../../store/login/login.actions';
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
    private toastcontroller: ToastController,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.store.select('login').subscribe((loginState) => {
      this.toggleLoading(loginState);
      this.onIsLoggedIn(loginState);
      this.onError(loginState);
    });
  }

  login() {
    this.store.dispatch(
      login({
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      })
    );
  }

  register() {
    this.router.navigate(['register']);
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
      this.navController.navigateRoot(['home']);
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

      setTimeout(() => {
        toaster.dismiss();
      }, 3000);
    }
  }
}
