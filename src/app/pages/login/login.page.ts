import { show, hide } from './../../store/loading/loading.actions';
import { LoginPageForm } from './login.page.form';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/login/login.actions';

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
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login() {
    this.store.dispatch(login());
    this.store.dispatch(show());
    setTimeout(() => {
      this.store.dispatch(hide());
      this.router.navigate(['home']);
    }, 3000);
  }

  register() {
    this.router.navigate(['register']);
  }
}
