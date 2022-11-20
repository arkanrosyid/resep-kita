import { Router, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPageComponent } from './user-page.component';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserPageComponent],
      imports: [IonicModule.forRoot(), RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPageComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to login page', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });

  it('should go to edit-user', () => {
    spyOn(router, 'navigate');

    component.userEdit();

    expect(router.navigate).toHaveBeenCalledWith(['user-edit']);
  });
});
