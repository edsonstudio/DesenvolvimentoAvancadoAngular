import { Store } from './../../todo.store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TasksService } from '../../todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;

  constructor(private tasksService: TasksService, private store: Store) {}

  ngOnInit() {
    this.iniciados$ = this.store.getToDoList()
    .pipe(
      map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
    );   
  }

  onToggle(event) {
    this.tasksService.toggle(event);
  }

}
