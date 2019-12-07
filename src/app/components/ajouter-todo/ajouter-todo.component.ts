import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from 'src/app/models/to-do';



@Component({
  selector: 'app-ajouter-todo',
  templateUrl: './ajouter-todo.component.html',
  styleUrls: ['./ajouter-todo.component.css']
})
export class AjouterTodoComponent implements OnInit {

  
  ajouterForm:FormGroup;

  constructor(formbuilder:FormBuilder) {
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
    let datat =this.ajouterForm.value ;
    let todo  =new ToDo (null,datat.description,null,null,null);
    console.log(todo);
  }
}
