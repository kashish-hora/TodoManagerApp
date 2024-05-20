import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpService: HttpClient) {}
  addTodo(todo: Todo) {
    return this.httpService.post<Todo>('http://localhost:8080/todos', todo);
  }
  getTodos() {
    return this.httpService.get<Todo[]>('http://localhost:8080/todos');
  }
  deleteTodo(todoId: String) {
    return this.httpService.delete(`http://localhost:8080/todos/${todoId}`);
  }

  getTodo(todoId: String) {
    return this.httpService.get<Todo>(`http://localhost:8080/todos/${todoId}`);
  }

  updateTodo(todoId: String, todo: Todo) {
    return this.httpService.put<Todo>(
      `http://localhost:8080/todos/${todoId}`,
      todo
    );
  }
}
