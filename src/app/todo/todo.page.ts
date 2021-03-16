import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
