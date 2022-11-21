import { ResepNusantaraPage } from './../../pages/resep-nusantara/resep-nusantara.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  resepNusantara() {
    this.router.navigate(['resep-nusantara']);
  }

  resepMancanegara() {
    this.router.navigate(['resep-mancanegara']);
  }
}
