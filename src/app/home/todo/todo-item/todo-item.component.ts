import { Component, Input, OnInit } from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {TodoDropdownMenuComponent} from './todo-dropdown-menu/todo-dropdown-menu.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoViewComponent } from './todo-view/todo-view.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input() todoObj;

  constructor(private popoverController: PopoverController, private modalController: ModalController) { }

  ngOnInit() {}


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TodoDropdownMenuComponent,
      event: ev,
      translucent: false,
      id: "todoItemMenuPopover",
      componentProps: {todoObject: this.todoObj}
    },);

    return await popover.present();
  }

  async presentViewMenu() {
    const modal = await this.modalController.create({
    component: TodoViewComponent,
    componentProps: { todoObject: this.todoObj, parent: this }
    });
    if(this.popoverController != undefined) this.popoverController.dismiss("todoItemMenuPopover");
    await modal.present();

  }
  async presentEditMenu(callledFromChildClass:boolean) {
    const modal = await this.modalController.create({
    component: TodoEditComponent,
    componentProps: { todoObject: this.todoObj}
    });
    if(this.popoverController && callledFromChildClass) this.popoverController.dismiss("todoItemMenuPopover");
    await modal.present();

  }

}
