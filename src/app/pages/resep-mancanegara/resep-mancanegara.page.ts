import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resep-mancanegara',
  templateUrl: './resep-mancanegara.page.html',
  styleUrls: ['./resep-mancanegara.page.scss'],
})
export class ResepMancanegaraPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }

  resep() {
    this.router.navigate(['resep']);
  }
}
