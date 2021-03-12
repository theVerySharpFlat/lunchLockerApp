import { Component, OnInit } from '@angular/core';
import { BleConnService } from './bleConn/ble-conn.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private bleConn: BleConnService) {}

  ngOnInit(){
    console.log("ngOnInit called in app.component.ts!");
    this.bleConn.startConnect();
    console.log("ngOnInit finished in app.component.ts!");
  }
}
