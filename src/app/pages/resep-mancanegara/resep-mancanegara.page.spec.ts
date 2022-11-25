import { AppRoutingModule } from './../../app-routing.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ResepMancanegaraPage } from './resep-mancanegara.page';

describe('ResepMancanegaraPage', () => {
  let component: ResepMancanegaraPage;
  let fixture: ComponentFixture<ResepMancanegaraPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResepMancanegaraPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResepMancanegaraPage);
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
