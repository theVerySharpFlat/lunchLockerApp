import { Component, OnInit } from '@angular/core';
import { BleConnService } from './bleConn/ble-conn.service';
import { SettingsStorageService } from './settings/settings-storage/settings-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private bleConn: BleConnService, private settingsStorage: SettingsStorageService) {}

  ngOnInit(){
    console.log("ngOnInit called in app.component.ts!");
    this.bleConn.startConnect();
    this.settingsStorage.loadSettings();
    console.log("ngOnInit finished in app.component.ts!");
  }
}
