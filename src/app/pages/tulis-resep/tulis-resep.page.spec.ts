import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulisResepPage } from './tulis-resep.page';

describe('TulisResepPage', () => {
  let component: TulisResepPage;
  let fixture: ComponentFixture<TulisResepPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TulisResepPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TulisResepPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page', () => {
    spyOn(router, 'navigate');

    component.home();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
