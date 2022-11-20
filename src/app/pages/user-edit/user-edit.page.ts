import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  user() {
    this.router.navigate(['user']);
  }
}
