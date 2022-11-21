import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  user() {
    this.router.navigate(['user']);
  }

  tulisResep() {
    this.router.navigate(['tulis-resep']);
  }

  resepSaya() {
    this.router.navigate(['resep-saya']);
  }
}
