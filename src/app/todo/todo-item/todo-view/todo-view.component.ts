import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissViewMenu() {
    this.modalController.dismiss();
  }

}
