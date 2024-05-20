import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent implements OnInit {
  todo = new Todo();
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const todoId = this.activatedRoute.snapshot.paramMap.get('todoId');
    console.log(todoId);
    this.apiService.getTodo(todoId || '').subscribe({
      next: (data) => {
        console.log(data);
        this.todo = data;
      },
    });
  }
  updateTodo(event: SubmitEvent) {
    this.apiService.updateTodo(this.todo.id, this.todo).subscribe({
      next: (data) => {
        alert('updated');
        this.todo = data;
      },
      error: (error) => {
        console.log(error);
        alert('not updated');
      },
    });
  }
}
