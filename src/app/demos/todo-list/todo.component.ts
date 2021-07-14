import { TasksService } from './todo.service';
import { Task } from './task';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tarefaForm: FormGroup;
  tarefa: Task;

  constructor(private fb: FormBuilder, private tasksService: TasksService) { }

  adicionarTarefa() {
    if(this.tarefaForm.dirty && this.tarefaForm.valid) {
      this.tarefa = Object.assign({}, this.tarefa, this.tarefaForm.value);
      this.tasksService.adicionar(this.tarefa);
      this.tarefaForm.reset();
    }
  }

  ngOnInit() {
    this.tarefaForm = this.fb.group({
      nome: [''],
    });
  }

}
