import { TasksService } from './../../todo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todolist$: Observable<any[]>

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.todolist$ = this.taskService.getToDoList$;
  }

}
