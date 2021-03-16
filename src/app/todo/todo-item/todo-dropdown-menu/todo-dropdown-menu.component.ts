import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { TodoViewComponent } from '../todo-view/todo-view.component';

@Component({
  selector: 'app-todo-dropdown-menu',
  templateUrl: './todo-dropdown-menu.component.html',
  styleUrls: ['./todo-dropdown-menu.component.scss'],
})
export class TodoDropdownMenuComponent implements OnInit {

  constructor(private modalController: ModalController, private popoverController: PopoverController) { }

  ngOnInit() {}

  async presentEditMenu() {
    const modal = await this.modalController.create({
    component: TodoEditComponent,
    componentProps: { value: 123 }
    });
    this.popoverController.dismiss("todoItemMenuPopover");
    await modal.present();

  }

  async presentViewMenu() {
    const modal = await this.modalController.create({
    component: TodoViewComponent,
    componentProps: { value: 123 }
    });
    this.popoverController.dismiss("todoItemMenuPopover");
    await modal.present();

  }

}
