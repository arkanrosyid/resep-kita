import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tulis-resep',
  templateUrl: './tulis-resep.page.html',
  styleUrls: ['./tulis-resep.page.scss'],
})
export class TulisResepPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }
}
