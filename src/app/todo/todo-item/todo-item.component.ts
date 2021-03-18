import { Component, Input, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {TodoDropdownMenuComponent} from './todo-dropdown-menu/todo-dropdown-menu.component';
import { Todo } from './../todoStorage/todo-storage.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input() todoObj;

  constructor(private popoverController: PopoverController) { }

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



}
