import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';
interface Task{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: false
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  constructor(public tasks: TaskService) { }
  onComplete() {
    this.tasks.removeTaskById(this.task.id);
  }
}
