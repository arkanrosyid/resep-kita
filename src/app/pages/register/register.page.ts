import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { hide, show } from './../../store/loading/loading.actions';
import { FormBuilder } from '@angular/forms';
import { RegisterPageForm } from './form/register-page-form';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import { register } from 'src/app/store/register/register.actions';
import { RegisterState } from 'src/app/store/register/RegisterState';
import { login } from 'src/app/store/login/login.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  registerForm: RegisterPageForm;

  registerStateSubscription: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController,
    private firebaseAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.createForm();
    this.watchRegisterState();
  }

  ngOnDestroy() {
    this.registerStateSubscription.unsubscribe();
  }

  async register() {
    this.registerForm.getForm().markAllAsTouched();
    if (this.registerForm.getForm().valid) {
      const users = {
        name: this.registerForm.getForm().value.name,
        email: this.registerForm.getForm().value.email,
        password: this.registerForm.getForm().value.password,
        kemampuan: this.registerForm.getForm().value.kemampuan,
      };

      await this.firebaseAuth.createUserWithEmailAndPassword(
        users.email,
        users.password
      );

      this.store.dispatch(
        register({ userRegister: this.registerForm.getForm().value })
      );

      const usersJSON = JSON.parse(JSON.stringify(users));
      return this.afs.collection('/Users').add(usersJSON);
    }
  }

  login() {
    this.router.navigate(['login']);
  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  private watchRegisterState() {
    this.registerStateSubscription = this.store
      .select('register')
      .subscribe((state) => {
        this.toggleLoading(state);

        if (state.isRegistered) {
          this.store.dispatch(
            login({
              email: this.registerForm.getForm().value.email,
              password: this.registerForm.getForm().value.password,
            })
          );
        }
        if (state.error) {
          this.toastController
            .create({
              message: 'Email Already Exisst',
              duration: 3000,
              header: 'Registration not done',
            })
            .then((toast) => toast.present());
        }
      });
  }

  private toggleLoading(state: RegisterState) {
    if (state.isRegistering) {
      this.store.dispatch(show());
    } else {
      this.store.dispatch(hide());
    }
  }
}
