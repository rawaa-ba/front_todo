import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AjouterTodoComponent } from './components/ajouter-todo/ajouter-todo.component';
import { ModifierTodoComponent } from './components/modifier-todo/modifier-todo.component';


const routes: Routes = [
{path:'',
component:HomeComponent
},
{path:'login',
component:LoginComponent
},
{path:'register',
component:RegisterComponent
},
{
  path:'user/todo-list',
  component:TodoListComponent
},
{
  path:'user/todo-list/ajouter-todo',
  component:AjouterTodoComponent

},
{
  path:'user/todo-list/modifier-todo',
  component:ModifierTodoComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
