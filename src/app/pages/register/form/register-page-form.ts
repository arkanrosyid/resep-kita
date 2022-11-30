import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class RegisterPageForm {
  private formBuilder: FormBuilder;
  private from: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.from = this.createForm();
  }

  private createForm(): FormGroup {
    const form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
      kemampuan: ['', [Validators.required]],
    });

    form.get('confirmPassword').setValidators(this.matchPassword(form));

    return form;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getForm(): FormGroup {
    return this.from;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  matchPassword(form: FormGroup): ValidatorFn {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    const validator = () =>
      password.value === confirmPassword.value ? null : { isntMaching: true };

    return validator;
  }
}
