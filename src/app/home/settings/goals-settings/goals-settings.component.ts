import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-goals-settings',
  templateUrl: './goals-settings.component.html',
  styleUrls: ['./goals-settings.component.scss'],
})
export class GoalsSettingsComponent implements OnInit {

  constructor(private modConn:ModalController) { }

  ngOnInit() {}

  dismissGoalsSettings = () => {
    this.modConn.dismiss();
  }

}
