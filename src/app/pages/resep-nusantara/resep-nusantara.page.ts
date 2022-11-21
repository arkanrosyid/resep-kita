import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resep-nusantara',
  templateUrl: './resep-nusantara.page.html',
  styleUrls: ['./resep-nusantara.page.scss'],
})
export class ResepNusantaraPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }

  resep() {
    this.router.navigate(['resep']);
  }
}
