import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTodoFormComponent } from './new-todo-form/new-todo-form.component';

@Injectable({
  providedIn: 'root'
})
export class TodouiService {

  constructor(private modalController: ModalController) { }

  async onUserCreateNewTodo(){
    console.log("new modal");
    const modal = await this.modalController.create({
      component: NewTodoFormComponent,
      componentProps: { value: 123 }
    });

    await modal.present();

  }
}
