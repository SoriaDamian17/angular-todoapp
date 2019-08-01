import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosListComponent } from './components/todo/todos-list/todos-list.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';

@NgModule({
  declarations: [
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
