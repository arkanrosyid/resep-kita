import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss'],
})
export class LoginStatusComponent implements OnInit {
  @Input() hasToken: boolean;

  @Input() nama: string;
  @Input() keahlian: string;

  constructor() {}

  ngOnInit() {}
}
