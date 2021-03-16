import { Component, Input, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {TodoDropdownMenuComponent} from './todo-dropdown-menu/todo-dropdown-menu.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input() title: string;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TodoDropdownMenuComponent,
      event: ev,
      translucent: false,
      id: "todoItemMenuPopover"
    });

    return await popover.present();
  }

  sayHello = () => {
    console.log("hello");

  }


}
