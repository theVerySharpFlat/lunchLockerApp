import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';

import { AppearanceSettingsComponent } from './appearance-settings/appearance-settings.component';
import { GoalsSettingsComponent } from './goals-settings/goals-settings.component';
import { SafeSettingsComponent } from './safe-settings/safe-settings.component';
import { HistorySettingsComponent } from './history-settings/history-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [
    SettingsPage,
    AppearanceSettingsComponent,
    GoalsSettingsComponent,
    SafeSettingsComponent,
    HistorySettingsComponent
  ]
})
export class SettingsPageModule {}
