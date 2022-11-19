import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  @Input() hasToken: boolean;

  @Input() nama: string;
  @Input() keahlian: string;

  constructor() {}

  ngOnInit() {}
}