import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todo!:Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

ngOnInit(){
  
}

  deleteTodo(todo: Todo){
    // console.log("button trigeered")
    this.todoDelete.emit(todo);
  }

  // addTodo(todo:Todo){
  //   this.todo
  // }

}


