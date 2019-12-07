import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList = [
    {
      description: "Terminer cours bootstrap 4",
      dateAjout: "09 / 11 / 2019",
    } ,
    {
      description: "Faire un nouveau projet angular",
      dateAjout: "09 / 11 / 2019"
    },
    {
      description: "Integration Template",
      dateAjout: "09 / 11 / 2019"
    }
  ] 
  doneList=[
    {
      description:"Terminer cours Html",
      dateAjout:"09 / 11 / 2019",
      dateFin:"09 / 11 / 2019"
    },
    {
      description:"Terminer cours Css",
      dateAjout:"09 / 11 / 2019",
      dateFin:"09 / 11 / 2019"
    },
    {
      description:"Terminer cour js",
      dateAjout:"09 / 11 / 2019",
      dateFin:"09 / 11 / 2019"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  deleteTodo(i: number) {
    this.todoList.splice(i,1)
  }
  deleteDone(i: number){
    this.doneList.splice(i,1)
  }
  terminerTodo(i:number,todo){
    this.todoList.splice(i,1)  
    todo.dateFin="10/12/2019"
    this.doneList.push(todo)
  }
}
