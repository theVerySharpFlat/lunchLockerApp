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
    console.time("ngOnInit: ");
    console.log("ngOnInit called in app.component.ts!");
    setTimeout(()=>this.bleConn.startConnect(),0);
    setTimeout(() => this.settingsStorage.loadSettings(),0);
    //setTimeout(()=>sleep(3000),0);
    console.timeLog("ngOnInit: ");
    console.timeEnd();
    console.log("ngOnInit done");
  }
}

let sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

