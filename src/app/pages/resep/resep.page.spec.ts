import { Router, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResepPage } from './resep.page';

describe('ResepPage', () => {
  let component: ResepPage;
  let fixture: ComponentFixture<ResepPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResepPage],
      imports: [IonicModule.forRoot(), RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResepPage);
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
