import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTodoFormComponent } from './new-todo-form/new-todo-form.component';
import { TodoStorageService } from './todoStorage/todo-storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  constructor(protected todoStorage: TodoStorageService, private modalController: ModalController) {

  }


  ngOnInit() {

  }

  async onUserCreateNewTodo(){

    const modal = await this.modalController.create({
      component: NewTodoFormComponent,
      componentProps: { value: 123 }
    });

    await modal.present();

  }



}
