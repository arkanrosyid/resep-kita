import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPageComponent } from './menu-page.component';

describe('MenuPageComponent', () => {
  let component: MenuPageComponent;
  let fixture: ComponentFixture<MenuPageComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPageComponent],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPageComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to user page', () => {
    spyOn(router, 'navigate');

    component.user();

    expect(router.navigate).toHaveBeenCalledWith(['user']);
  });

  it('shoukd go to tulis resep page', () => {
    spyOn(router, 'navigate');

    component.tulisResep();

    expect(router.navigate).toHaveBeenCalledWith(['tulis-resep']);
  });

  it('shoukd go to resep saya page', () => {
    spyOn(router, 'navigate');

    component.resepSaya();

    expect(router.navigate).toHaveBeenCalledWith(['resep-saya']);
  });
});
