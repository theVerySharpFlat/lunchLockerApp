import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {NgCircleProgressModule} from 'ng-circle-progress';

import { BLE } from '@ionic-native/ble/ngx';

import { BleConnService } from './bleConn/ble-conn.service';

import { IonicStorageModule } from '@ionic/storage';

import { SettingsStorageService } from './settings/settings-storage/settings-storage.service';
import { TodoStorageService } from './todo/todoStorage/todo-storage.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      percent: 0,
      maxPercent: 100
    }),
    IonicStorageModule.forRoot()
  ],
  providers: [
    BLE,
    BleConnService,
    SettingsStorageService,
    TodoStorageService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
