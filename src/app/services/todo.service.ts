import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
private getAllTodosUrl="http://localhost:3000/todo/list/";
private _ajouterTodoUrl="http://localhost:3000/todo/add/";
private _supprimerDoneUrl="http://localhost:3000/todo/delete/";
private _supprimerTodoUrl="http://localhost:3000/todo/delete/";
private _terminerUrl="http://localhost:3000/todo/done/";
private _modifiertodoUrl="http://localhost:3000/todo/update/";


  constructor(private http:HttpClient) { }
  getAllTodos(idUser){
    return this.http.get<any>(this.getAllTodosUrl+idUser)
  }
  ajouterTodo(todo){
    let resultFromdb=this.http.post<any>(this._ajouterTodoUrl,todo);
    return resultFromdb;
  }
  supprimerDone(todo){
    let resultFromdb=this.http.delete<any>(this._supprimerDoneUrl,todo);
    return resultFromdb;

  }
  supprimerTodo(_id,todo){
    let resultFromdb=this.http.delete<any>(this._supprimerTodoUrl,_id);
    return resultFromdb;

  }
  terminer(todo){
    let resultFromdb=this.http.put<any>(this._terminerUrl,todo);
    return resultFromdb;
  }
  modifiertodo(id,description,todo){
    let resultFromdb=this.http.put<any>(this._modifiertodoUrl,id,todo);
    return resultFromdb;
  }
}
