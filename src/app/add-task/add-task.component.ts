import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
    inputFocus: boolean = false;
    newTask: Task = new Task();
    constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
    showAllAddTask() {
        console.log("Trying to focus");

        this.inputFocus = true;
    }

    addTask() {
        this.newTask.status_id = 1;
        this.newTask.user_id = 2;
        console.log(this.newTask);
        this.taskService.addTask(this.newTask);
        this.newTask = new Task();
        this.inputFocus = false;
    }

}
