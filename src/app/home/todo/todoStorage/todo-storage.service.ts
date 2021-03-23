import { Injectable, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  private _todos:Todo[] = [];
  constructor(private storage: Storage, private ngZone:NgZone) {}

  get todos():Todo[]{
    return this._todos;
  }

  public deleteTodo(title: string):Promise<void>{
    return new Promise<void>((resolve,reject) => {
      let foundIndex:number = this.todos.findIndex(element => element.title == title);
      if(foundIndex != -1){
        this.todos.splice(foundIndex,1);
        this.updateTodoStorage();
        resolve();
      }else{
        reject(new Error("Todo Not Found"));
      }
    });
  }
  public addTodo(tempTodo:Todo) {
    this.ngZone.run(() => {
      this._todos.push(tempTodo);
      this.updateTodoStorage();
    });
  }

  private async updateTodoStorage(){
   this.storage.set('todos', JSON.stringify(this._todos));
  }

  public async loadTodosFromLocal() {
    let temp = JSON.parse((await this.storage.get('todos')));
    if(temp) this._todos = temp;
  }

  public async deleteAllTodos() {
    this.ngZone.run(
      () =>{
        this._todos.splice(0,this._todos.length);
        this.updateTodoStorage();
      });
  }
}

export interface Todo {
  title:string,
  type:string,
  target:number
}
