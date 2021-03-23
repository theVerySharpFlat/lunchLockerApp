import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Todo, TodoStorageService } from '../../todoStorage/todo-storage.service';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { TodoViewComponent } from '../todo-view/todo-view.component';

@Component({
  selector: 'app-todo-dropdown-menu',
  templateUrl: './todo-dropdown-menu.component.html',
  styleUrls: ['./todo-dropdown-menu.component.scss'],
})
export class TodoDropdownMenuComponent implements OnInit {

  todoObj: Todo;

  constructor(private modalController: ModalController, private popoverController: PopoverController,  private navParams:NavParams, private todoStorage: TodoStorageService, private alertController: AlertController) { }

  ngOnInit() {
    this.todoObj = this.navParams.get("todoObject");
  }

  async presentEditMenu(callledFromChildClass:boolean) {
    const modal = await this.modalController.create({
    component: TodoEditComponent,
    componentProps: { todoObject: this.todoObj}
    });
    if(this.popoverController && callledFromChildClass) this.popoverController.dismiss("todoItemMenuPopover");
    await modal.present();

  }

  async presentViewMenu() {
    const modal = await this.modalController.create({
    component: TodoViewComponent,
    componentProps: { todoObject: this.todoObj, parent: this }
    });
    if(this.popoverController != undefined) this.popoverController.dismiss("todoItemMenuPopover");
    await modal.present();

  }

  async onUserDeleteTodo() {
    this.presentAlert();
    await this.popoverController.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to delete this todo?',
      cssClass: "appAlert",
      buttons: [
        {
          text: "No",
          cssClass: "alertNo",
          handler: () => {}
        },
        {
        text: "Yes",
        cssClass: "alertYes",
        handler: () => {
          this.todoStorage.deleteTodo(this.todoObj.title);
        }
      }
    ]
    });

    await alert.present();
  }

}
