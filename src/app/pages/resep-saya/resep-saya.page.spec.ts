import { Router, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResepSayaPage } from './resep-saya.page';

describe('ResepSayaPage', () => {
  let component: ResepSayaPage;
  let fixture: ComponentFixture<ResepSayaPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResepSayaPage],
      imports: [IonicModule.forRoot(), RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResepSayaPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page', () => {
    spyOn(router, 'navigate');

    component.home();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should go to resep page', () => {
    spyOn(router, 'navigate');

    component.resep();

    expect(router.navigate).toHaveBeenCalledWith(['resep']);
  });
});
