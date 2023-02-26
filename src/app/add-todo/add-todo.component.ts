import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
Sno!:number
Name!:String
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

constructor(){

}

addTodo(){
const todo ={
  Sno:this.Sno,
  Name:this.Name
  
}
this.todoAdd.emit(todo);

}

}
