import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FitnessService } from '../fitnessService/fitness.service';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(protected fitness:FitnessService, private modalController: ModalController) {}

  ngOnInit(){
  }

  async onUserPresentSettings() {
    const modal = await this.modalController.create({
    component: SettingsComponent,
    componentProps: { value: 123 }
    });

    await modal.present();

  }
}
