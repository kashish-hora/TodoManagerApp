import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css'],
})
export class ViewTodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getTodos().subscribe({
      next: (data) => {
        console.log(data);
        this.todos = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
  deleteEventFromChild(todoId: String) {
    this.todos = this.todos.filter((todo) => todo.id != todoId);
  }
}
