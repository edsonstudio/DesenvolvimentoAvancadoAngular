import { map } from 'rxjs/operators';
import { Store } from './../../todo.store';
import { TasksService } from './../../todo.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit() {
    this.todolist$ = this.store.getToDoList()
    .pipe(
      map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));
    
      this.subscription = this.taskService.getToDoList$.subscribe(); //para ativar o fluxo de dados
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
