import { map } from 'rxjs/operators';
import { Store } from './../../todo.store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.css']
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>;

  constructor(private tasksService: TasksService, private store: Store) { }

  ngOnInit() {
    this.finalizados$ = this.store.getToDoList()
    .pipe(
      map(todolist => todolist.filter(task => task.finalizado)));      
  }

}
