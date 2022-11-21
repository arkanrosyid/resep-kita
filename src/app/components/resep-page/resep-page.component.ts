import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resep-page',
  templateUrl: './resep-page.component.html',
  styleUrls: ['./resep-page.component.scss'],
})
export class ResepPageComponent implements OnInit {
  @Input() makanan: string;
  @Input() jenis: string;
  @Input() bahan: string;
  @Input() resep: string;

  constructor() {}

  ngOnInit() {}
}
