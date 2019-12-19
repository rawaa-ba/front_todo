import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from 'src/app/models/to-do';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-todo',
  templateUrl: './ajouter-todo.component.html',
  styleUrls: ['./ajouter-todo.component.css']
})
export class AjouterTodoComponent implements OnInit {

  
  ajouterForm:FormGroup;

  constructor(formbuilder:FormBuilder, private router:Router,private todoService:TodoService) {
    this.ajouterForm=formbuilder.group({
      description:new FormControl('',[
        Validators.required       
      ])
    })
   }
   get description(){return this.ajouterForm.get('description')}

  ngOnInit() {
  }
    
  
ajouter(){
 
  const helper = new JwtHelperService();
  let token = localStorage.getItem('token')
  const decodedToken = helper.decodeToken(token);
  let idUser = decodedToken.idUser ;
  let datat =this.ajouterForm.value ;
  let todo  =new ToDo (null,datat.description,null,null,idUser);
  console.log(todo);
  this.todoService.ajouterTodo(todo).subscribe((result)=>{
    console.log(result.message);
    this.router.navigate(['/user/todo-list'])
  },(erreur)=>{
    console.log(erreur);
  })
 }
}