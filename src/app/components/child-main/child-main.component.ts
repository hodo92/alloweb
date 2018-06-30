import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Subscriber } from 'rxjs';


@Component({
    selector: 'app-child-main',
    templateUrl: './child-main.component.html',
    styleUrls: ['./child-main.component.css']
})
export class ChildMainComponent implements OnInit {

    public childId: number;
    tasks: Task[] = new Array<Task>();
    public user: String;
    public img = String;
    public balance = Number;
    public currentRoute: String;
    

    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
        this.taskService.tasksUpdated.subscribe((data) => {
            this.tasks = data;
            this.user = this.tasks[0].User.first_name;
            this.img = this.tasks[0].User.user_img;
            this.balance = this.tasks[0].User.balance;
        });
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.childId = params.id;
            this.taskService.getTasks(this.childId);
        });

        // Current route finding - for display correct info to parent or child user
        // /child-task for child & /child-view for parent
        this.currentRoute = this.router.url.slice(1, 11);
        console.log(this.currentRoute);
    }

    addTask(newTask) {
        newTask.user_id = this.childId;
        this.taskService.addTask(newTask);
    }

    taskStatusCompleted(task) {
        // newTask.user_id = this.childId;
        this.taskService.taskStatusCompleted(task);
    }

}
