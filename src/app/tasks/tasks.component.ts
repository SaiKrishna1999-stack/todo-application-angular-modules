import { Component, Input } from '@angular/core';
import { NewAddTask } from '../models/new-task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isAddingTask = false;
  constructor(private tasks: TaskService) {  }

  get userTasks() {
    return this.tasks.getTasksByUserId(this.userId);
  }

  onTaskComplete(taskId: string) {
    this.tasks.removeTaskById(taskId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }
  onCancel() {
    this.isAddingTask = false;
  }
  onSubmitTask(task : NewAddTask) {
    this.tasks.addTasks(task, this.userId);
    this.isAddingTask = false;
  }
}
