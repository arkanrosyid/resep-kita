import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resep-page',
  templateUrl: './resep-page.component.html',
  styleUrls: ['./resep-page.component.scss'],
})
export class ResepPageComponent implements OnInit {
  @Input() judul: string;
  @Input() gambar: string;
  @Input() jenis: string;
  @Input() bahan: string;
  @Input() langkah: string;

  constructor() {}

  ngOnInit() {}
}
