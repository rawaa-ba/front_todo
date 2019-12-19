import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ToDo } from 'src/app/models/to-do';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modifier-todo',
  templateUrl: './modifier-todo.component.html',
  styleUrls: ['./modifier-todo.component.css']
})
export class ModifierTodoComponent implements OnInit {
  modifierForm:FormGroup;
  todoList = []


  constructor(formbuilder:FormBuilder, private todoService:TodoService , private router:Router) {
    this.modifierForm=formbuilder.group({
      description:new FormControl('',[
        Validators.required     
      ])
    })
  }
  get description(){return this.modifierForm.get('description')}

  ngOnInit() {
  }
  modifier(i:number,id,description,todo){
  this.todoService.modifiertodo(id,description,todo).subscribe((result)=>{
    console.log(result);
    this.router.navigate(['/todo-list'])
  },(erreur)=>{
    console.log(erreur);
  })
  }
}
