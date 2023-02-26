import { Component } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  localItem:any;
  todos:Todo[];

  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos=[]
    }
    else{
      this.todos = JSON.parse(this.localItem);

    }
  }
 deleteTodo(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
 }

 addTodo(todo:Todo){
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(this.todos));
 }

}
