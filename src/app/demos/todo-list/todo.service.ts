import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  getToDoList$: Observable<Task[]> = this.http.get<Task[]>('https://json-server-angular.herokuapp.com/todolist');

  // getToDoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('https://json-server-angular.herokuapp.com/todolist');
  // }
}
