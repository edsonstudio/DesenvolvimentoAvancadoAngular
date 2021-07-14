// ---------------Angular---------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// ---------------Components---------------
import { TodoComponent } from './todo.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';

// ---------------Services---------------
import { TasksService } from './todo.service';
import { Store } from './todo.store';

// ---------------Angular material---------------
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// ---------------Sub-modules---------------

// ---------------Validation modules---------------


@NgModule({
  declarations: [
    TodoComponent,
    TasksComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    TodoComponent,
    TasksComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoListComponent
  ],
  providers: [
    TasksService,
    Store
  ]
})
export class TodoModule { }
