import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resep-saya',
  templateUrl: './resep-saya.page.html',
  styleUrls: ['./resep-saya.page.scss'],
})
export class ResepSayaPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }

  resep() {
    this.router.navigate(['resep']);
  }
}
