import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoStorageService } from '../todoStorage/todo-storage.service';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.scss'],
})
export class NewTodoFormComponent implements OnInit {

  titleValue:string;

  constructor(private modalController: ModalController, private todoStorage: TodoStorageService) { }

  ngOnInit() {}

  async dismissNewTodoForm(){
    await this.modalController.dismiss();
  }

  async onUserSubmit(){
    this.todoStorage.addTodo({
      title:this.titleValue
    });
    await this.modalController.dismiss();
  }

}
