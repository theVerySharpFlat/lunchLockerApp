import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { NewTodoFormComponent } from './todo/new-todo-form/new-todo-form.component';
import { TodoEditComponent } from './todo/todo-item/todo-edit/todo-edit.component';
import { TodoViewComponent } from './todo/todo-item/todo-view/todo-view.component';
import { SettingsComponent } from './settings/settings.component';
import { SafeSettingsComponent } from './settings/safe-settings/safe-settings.component';
import { HistorySettingsComponent } from './settings/history-settings/history-settings.component';
import { GoalsSettingsComponent } from './settings/goals-settings/goals-settings.component';
import { AppearanceSettingsComponent } from './settings/appearance-settings/appearance-settings.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    TodoComponent,
    TodoItemComponent,
    NewTodoFormComponent,
    TodoEditComponent,
    TodoViewComponent,
    SettingsComponent,
    SafeSettingsComponent,
    HistorySettingsComponent,
    GoalsSettingsComponent,
    AppearanceSettingsComponent
  ]
})
export class HomePageModule {}
