import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    
   todoList = [] 
  doneList = []
  
  constructor(private todoService:TodoService , private router:Router) { }

  ngOnInit() { 
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token);
    let idUser = decodedToken.idUser ;
    this.todoService.getAllTodos(idUser).subscribe(
      (result)=>{
        console.log(result);
        this.todoList=result.todoList;
        this.doneList=result.doneList;
      },
      (error)=>{
        console.log(error);        
      }
    )
  }


  deleteTodo(i:number,_id,todo) {
  
    this.todoService.supprimerTodo(_id,todo).subscribe(
      (result)=>{
      console.log(result);
      
    },(erreur)=>{
      console.log(erreur);
    })
  }
  deleteDone(i: number,todo) {
    let id = this.doneList[i]._id;
    this.todoService.supprimerDone(todo).subscribe((result)=>{
      console.log(result);
    },(erreur)=>{
      console.log(erreur);
    })
  }
  terminerTodo(i: number, todo) {
    this.todoService.terminer(todo).subscribe((result)=>{
      console.log(result);
    },(erreur)=>{
      console.log(erreur);
    })
  }
 


}
