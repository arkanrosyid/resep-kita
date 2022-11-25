import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserEditPage } from './user-edit.page';

describe('UserEditPage', () => {
  let component: UserEditPage;
  let fixture: ComponentFixture<UserEditPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserEditPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to user', () => {
    spyOn(router, 'navigate');

    component.user();

    expect(router.navigate).toHaveBeenCalledWith(['user']);
  });
});
