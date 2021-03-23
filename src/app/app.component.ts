import { Component, OnInit } from '@angular/core';
import { BleConnService } from './bleConn/ble-conn.service';
import { FitnessService } from './fitnessService/fitness.service';
import { SettingsStorageService } from './settings/settings-storage/settings-storage.service';
import { TodoStorageService } from './todo/todoStorage/todo-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private bleConn: BleConnService, private settingsStorage: SettingsStorageService, private todoStorage: TodoStorageService, private fitness: FitnessService) {}

  ngOnInit(){
    console.time("ngOnInit: ");
    console.log("ngOnInit called in app.component.ts!");
    this.bleConn.startConnect();
    this.settingsStorage.loadSettings();
    this.todoStorage.loadTodosFromLocal();
    this.fitness.init();
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

