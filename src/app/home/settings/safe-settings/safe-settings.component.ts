import { Component, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BleConnService } from 'src/app/bleConn/ble-conn.service';

@Component({
  selector: 'app-safe-settings',
  templateUrl: './safe-settings.component.html',
  styleUrls: ['./safe-settings.component.scss'],
})
export class SafeSettingsComponent implements OnInit {

  safeRSSIValue = 0;

  private viewHasLeft = false;

  constructor(private modConn: ModalController, protected bleConn: BleConnService, private ngZone: NgZone) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.viewHasLeft = false;
    this.autoUpdateSafeRSSI();
  }

  ionViewWillLeave() {
    this.viewHasLeft = true;
  }

  dismissSafeSettings = () => {
    this.modConn.dismiss();
  }

  autoUpdateSafeRSSI = async():Promise<void> => {
    return new Promise<void>((resolve, reject) => {


    let read = () => {if(this.bleConn.connected) this.bleConn.readRSSI().then((value: number) => {
      this.ngZone.run(() => {
        this.safeRSSIValue = value;
      }),
      (reason: any) => {
        console.log(`error reading RSSI. REASON: ${reason}`);
      }
    });}

    setInterval(() => read(), 3000);


  });
  }

}
