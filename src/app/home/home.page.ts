import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FitnessService } from '../fitnessService/fitness.service';
import { SettingsStorageService } from './settings/settings-storage/settings-storage.service';
import { SettingsComponent } from './settings/settings.component';
import { TodouiService } from './todo/todoui.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  screenWidth:number;
  constructor(protected fitness:FitnessService, private modalController: ModalController, private settingsStorage: SettingsStorageService, private todoui: TodouiService) {}

  ngOnInit(){
    this.screenWidth = window.innerWidth;
  }

  async onUserPresentSettings() {
    const modal = await this.modalController.create({
    component: SettingsComponent,
    componentProps: { value: 123 }
    });

    await modal.present();

  }
}
