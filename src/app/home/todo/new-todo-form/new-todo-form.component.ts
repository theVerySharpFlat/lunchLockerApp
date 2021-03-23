import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoStorageService } from '../todoStorage/todo-storage.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.scss'],
})
export class NewTodoFormComponent implements OnInit {

  form:FormGroup;
  titleValue:string;

  constructor(private modalController: ModalController, private todoStorage: TodoStorageService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control(''),
      description: this.fb.control(''),
      goalType: this.fb.control('')
    });

    //this.form.valueChanges.subscribe(console.log);
  }

  async dismissNewTodoForm(){
    await this.modalController.dismiss();
  }

  async onUserSubmit(){
    console.log("onUserSubmit");
    console.log(this.form.value);
    this.todoStorage.addTodo({
      title:this.form.value.name,
      description: this.form.value.description,
      type: this.form.value.goalType
    });
    await this.modalController.dismiss();
  }

}
