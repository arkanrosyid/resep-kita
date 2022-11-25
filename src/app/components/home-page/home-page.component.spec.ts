import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to resep nusantara page', () => {
    spyOn(router, 'navigate');

    component.resepNusantara();

    expect(router.navigate).toHaveBeenCalledWith(['resep-nusantara']);
  });

  it('should go to resep mancanegara page', () => {
    spyOn(router, 'navigate');

    component.resepMancanegara();

    expect(router.navigate).toHaveBeenCalledWith(['resep-mancanegara']);
  });
});
