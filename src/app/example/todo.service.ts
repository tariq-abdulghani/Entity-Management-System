import { Injectable } from '@angular/core';
import {
  CreateAction,
  DeleteAction,
  EditAction,
  PostViewInit,
} from '../decorators/create-action';
import { ViewController } from '../decorators/entity-view-controller';
import { TableMapping } from '../decorators/table-view-mapping';

@TableMapping({ columns: ['id', 'description', 'comment'] })
@ViewController({ relativePath: 'todos', formEntity: TodoService })
@Injectable({ providedIn: 'root' })
export class TodoService {
  name = 'todo';
  say = 'dddd';
  constructor() {}

  @PostViewInit
  getAll() {
    console.log('getting all todos');
  }

  @CreateAction
  create() {
    console.log('creating new todo');
  }

  @EditAction
  edit() {
    console.log('edit  todo');
  }

  @DeleteAction
  delete() {
    console.log('delete  todo');
  }
}
