import { Store } from './todo.store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient, private store: Store) { }

  getToDoList$: Observable<Task[]> = this.http
  .get<Task[]>('https://json-server-angular.herokuapp.com/todolist')
  .pipe(
    tap(next => this.store.set('todolist', next)));

  // getToDoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('https://json-server-angular.herokuapp.com/todolist');
  // }
}
