import { Injectable } from '@angular/core';
import {
  CreateAction as Create,
  DeleteAction as Delete,
  EditAction as Update,
  Fetch as Read,
  PageChange,
  PostViewInit,
} from '../decorators/create-action';
import { ViewController as Controller } from '../decorators/entity-view-controller';
import { TableMapping as Table } from '../decorators/table-view-mapping';

@Table({ columns: ['id', 'description', 'comment'] })
@Controller({ resource: 'todos', formEntity: TodoService })
@Injectable({ providedIn: 'root' })
export class TodoService {
  name = 'todo';
  say = 'dddd';
  constructor() {}

  @PostViewInit
  init() {
    console.log('init todos');
  }

  @Read
  getAll() {
    console.log('fetching all todos todos');
  }

  @Create
  create() {
    console.log('creating new todo');
  }

  @Update
  edit() {
    console.log('edit  todo');
  }

  @Delete
  delete() {
    console.log('delete  todo');
  }

  @PageChange
  onPageChange() {}
}
