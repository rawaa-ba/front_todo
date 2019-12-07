import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-modifier-todo',
  templateUrl: './modifier-todo.component.html',
  styleUrls: ['./modifier-todo.component.css']
})
export class ModifierTodoComponent implements OnInit {
  modifierForm:FormGroup;

  constructor(formbuilder:FormBuilder) {
    this.modifierForm=formbuilder.group({
      description:new FormControl('',[
        Validators.required     
      ])
    })
  }
  get description(){return this.modifierForm.get('description')}

  ngOnInit() {
  }
  modifier(){
    let datat =this.modifierForm.value;
    let todo  =new ToDo (null,datat.description,null,null,null);
    console.log(todo);
  }
}
