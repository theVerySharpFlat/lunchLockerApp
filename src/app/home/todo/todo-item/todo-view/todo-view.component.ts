import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Todo } from '../../todoStorage/todo-storage.service';
import { TodoDropdownMenuComponent } from '../todo-dropdown-menu/todo-dropdown-menu.component';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent implements OnInit {

  todoObj: Todo = null;
  parent:TodoDropdownMenuComponent = null;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.todoObj = this.navParams.get("todoObject");
    this.parent = this.navParams.get("parent");
  }

  dismissViewMenu() {
    this.modalController.dismiss();
  }

  onUserRequestEditTodo() {
    this.parent.presentEditMenu(false);
  }



}
