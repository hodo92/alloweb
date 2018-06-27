import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Subscriber } from 'rxjs';



@Component({
    selector: 'app-child-tasks',
    templateUrl: './child-tasks.component.html',
    styleUrls: ['./child-tasks.component.css']
})
export class ChildTasksComponent implements OnInit {
    // inputFocus: boolean = false;
    // childId: number;
    public childId: number;
    tasks: Task[] = new Array<Task>();

    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
        this.taskService.tasksUpdated.subscribe((data) => {
            this.tasks = data;
        });
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.childId = params.id;
            this.taskService.getTasks(this.childId);
        });
    }

    addTask(newTask) {
        // console.log(newTask);
        newTask.user_id = this.childId;
        // console.log(newTask);
        this.taskService.addTask(newTask);
    }

    taskStatusCompleted(taskId) {
        console.log(taskId);
        // newTask.user_id = this.childId;
        // console.log(newTask);
        this.taskService.taskStatusCompleted(taskId);
    }
}
