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
  // .get<Task[]>('https://json-server-angular.herokuapp.com/todolist')
  .get<Task[]>('https://flicker-acoustic-century.glitch.me/todolist')
  .pipe(
    tap(next => this.store.set('todolist', next)));

  // getToDoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('https://json-server-angular.herokuapp.com/todolist');
  // }

  toggle(event: any) {
    this.http
    // .put(`https://json-server-angular.herokuapp.com/todolist/${event.task.id}`, event.task)
    .put(`https://flicker-acoustic-century.glitch.me/todolist/${event.task.id}`, event.task)
    .subscribe(() => {
      const value = this.store.value.todolist;

      const todolist = value.map((task: Task) => {
        if(event.task.id === task.id) {
          return { ...task, ...event.task }
        }else {
          return task;
        }
      });

      this.store.set('todolist', todolist);
    });
  }

  adicionar(task: Task) {
    this.http
      // .post('https://json-server-angular.herokuapp.com/todolist', task)
      .post('https://flicker-acoustic-century.glitch.me/todolist', task)
      .subscribe(() => {

      const value = this.store.value.todolist;

      task.id = value.slice(-1).pop().id + 1
      task.finalizado = false;
      task.iniciado = false;

      value.push(task);
      this.store.set('todolist', value);
    });
  }

  remover(id: number) {
    this.http
      // .delete(`https://json-server-angular.herokuapp.com/todolist/${id}`)
      .delete(`https://flicker-acoustic-century.glitch.me/todolist/${id}`)
      .subscribe(() => {

        const value = this.store.value.todolist.filter(item => item.id !==id);

        this.store.set('todolist', value);
      });
  }
}
