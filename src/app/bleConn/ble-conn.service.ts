import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Injectable({
  providedIn: 'root'
})
export class BleConnService {

  progress:number = 0;

  safeServiceUUID: string = '27cf08c1-076a-41af-becd-02ed6f6109b9';

  safeLockCharacteristicUUID: string = 'fd49f629-e9a4-42b8-bcc1-9818e759b2c4';

  safeBrodcastedName = 'rpi';

  safeDevice: any = null;

  connected = false;

  safeUnLocked = null;

  safeStringStatus:string = "";

  constructor(private ble:BLE, private ngZone: NgZone) { }

  startConnect = async():Promise<void> => {
    let promise = new Promise<void>((resolve, reject) => {
      this.ble.startScan([this.safeServiceUUID]).subscribe(
        device => this.onDeviceFound(device),
        error => console.log(error.message)
      );
    });

    return promise;
  }

  onDeviceFound = (device:any) => {
    console.log("Discovered " + JSON.stringify(device, null, 2));
    this.safeDevice = device;
    this.ble.stopScan();
    this.ngZone.run(() => {
      this.ble.autoConnect(
        this.safeDevice.id,
        () => {console.log("connected");this.connected = true;this.readSafeLockStatus().then((value) => console.log(`safe status: ${value}`))},
        () => {console.log("disconnected");this.connected = false;}
      );
    }
    );
  }

  disconnect = () => {
    this.ble.disconnect(this.safeDevice.id)
    .then((value) => {console.log(`disconnected with value of: ${value}`); this.connected = false});
  }

  readSafeLockStatus = async():Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      this.ble.read(this.safeDevice.id, this.safeServiceUUID, this.safeLockCharacteristicUUID)
      .then((value) => {
        let rawData = new Uint8Array(value);
        this.ngZone.run(() => {
          this.safeUnLocked = !!rawData[0];
          this.safeStringStatus = this.safeUnLocked ? "unlocked" : "locked";
        });
        resolve(rawData[0]);
      },
      (reason) => {
        console.log(`ERROR READING: ${reason}`);
        reject(reason);
      })
    });
  }

  writeValueToSafeLock = async(value:number):Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      let data = new Uint8Array([value]).buffer
      this.ble.write(this.safeDevice.id, this.safeServiceUUID, this.safeLockCharacteristicUUID, data)
        .then(
        () => this.readSafeLockStatus()
          .then(
            (status) => {
              if(status != value){
                console.log(`status is ${status}`);
                reject(new Error("Possible Invalid Write"));
              }
              else{
                resolve(status);
              }
            },
            (reason) => {
              console.log(`ERROR WRITING reason: ${reason}`);
              console.log("woe is us! something horrible happened when writing.");
              reject(reason);
            }
          )
        );
    });
  }
}
