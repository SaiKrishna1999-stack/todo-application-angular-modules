import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewAddTask } from '../../models/new-task.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: false
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<NewAddTask>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';
  constructor(private taskService: TaskService) { }
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.taskService.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);
    this.cancel.emit();
  }
}
