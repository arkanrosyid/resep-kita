import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
  }));

  it('should show invalid email error message if touched', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.showComponent()).toBeTruthy();
  });

  it('should hide error if not touched', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.showComponent()).toBeFalsy();
  });

  it('should hide error message on field touched, but no error', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.markAsTouched();
    component.error = 'anyError';

    expect(component.showComponent()).toBeFalsy();
  });

  it('should hide error on field touched, but the error is a different error', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = 'anotherError';

    expect(component.showComponent()).toBeFalsy();
  });
});
