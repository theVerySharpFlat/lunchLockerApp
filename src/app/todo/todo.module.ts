import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoPageRoutingModule } from './todo-routing.module';

import { TodoPage } from './todo.page';

import { TodoItemComponent } from './todo-item/todo-item.component'
import { NewTodoFormComponent } from './new-todo-form/new-todo-form.component';


import { FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TodoPage, TodoItemComponent, NewTodoFormComponent]
})
export class TodoPageModule {}
