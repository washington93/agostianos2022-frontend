import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  @ViewChild('scanner') scanner: any;
  scannerEnabled: boolean = true;

  constructor() {}

  ngOnInit() {}

  public scanSuccessHandler($event: any) {
    try {
      this.scannerEnabled = false;
      console.log($event);
      alert($event);
    } catch (error) {}
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }
}
