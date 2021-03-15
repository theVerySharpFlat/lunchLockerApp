import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'

@Component({
  selector: 'app-history-settings',
  templateUrl: './history-settings.component.html',
  styleUrls: ['./history-settings.component.scss'],
})
export class HistorySettingsComponent implements OnInit {

  constructor(private modConn: ModalController) { }

  ngOnInit() {}

  dismissHistorySettings = () => {
    this.modConn.dismiss();
  }
}
