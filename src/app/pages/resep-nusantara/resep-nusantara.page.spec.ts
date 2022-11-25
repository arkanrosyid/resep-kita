import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResepNusantaraPage } from './resep-nusantara.page';

describe('ResepNusantaraPage', () => {
  let component: ResepNusantaraPage;
  let fixture: ComponentFixture<ResepNusantaraPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResepNusantaraPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResepNusantaraPage);
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
