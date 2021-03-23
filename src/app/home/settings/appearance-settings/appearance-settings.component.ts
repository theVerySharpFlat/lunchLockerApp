import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsStorageService } from '../settings-storage/settings-storage.service';

@Component({
  selector: 'app-appearance-settings',
  templateUrl: './appearance-settings.component.html',
  styleUrls: ['./appearance-settings.component.scss'],
})
export class AppearanceSettingsComponent implements OnInit {

  constructor(private modConn:ModalController, private renderer: Renderer2, private storage:SettingsStorageService) { }

  ngOnInit() {

  }

  onToggleColorTheme = (event) => {
    let checked:Boolean = event.detail.checked;

    this.storage.prefersDarkTheme = checked;
  }

  dismissAppearanceSettings = () => {
    this.modConn.dismiss();
  }


}
