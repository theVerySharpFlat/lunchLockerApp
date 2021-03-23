import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppearanceSettingsComponent } from './appearance-settings/appearance-settings.component';
import { GoalsSettingsComponent } from './goals-settings/goals-settings.component';
import { HistorySettingsComponent } from './history-settings/history-settings.component';
import { SafeSettingsComponent } from './safe-settings/safe-settings.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private modConn: ModalController) { }

  ngOnInit() {
  }

  async onUserSettingsDismiss() {
    await this.modConn.dismiss();
  }
  openAppearanceSettings = async() => {
    const modal = await this.modConn.create({
      component: AppearanceSettingsComponent
    });

    return await modal.present();
  }

  openGoalSettings = async() => {
    const modal = await this.modConn.create({
      component: GoalsSettingsComponent
    });

    return await modal.present();
  }

  openHistorySettings = async() => {
    const modal = await this.modConn.create({
      component: HistorySettingsComponent
    });

    return await modal.present();
  }

  openSafeSettings = async() => {
    const modal = await this.modConn.create({
      component: SafeSettingsComponent
    });

    return await modal.present();
  }

}
