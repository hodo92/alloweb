import { Component, OnInit, Input } from '@angular/core';
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
    public _isParent: boolean = true;
    tasks: Task[] = new Array<Task>();

    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
        // this.taskService.tasksUpdated.subscribe((data) => {
        //     this.tasks = data;
        //     // this._isParent = data[0].User.is_parent;
        //     console.log("child-tasks data");
        //     console.log(this.tasks);
        // });
    }

    ngOnInit() {
        // this.route.params.subscribe((params: Params) => {
        //     this.childId = params.id;
        //     this.taskService.getTasks(this.childId);
        // });
    }

    // addTask(newTask) {
    //     // console.log(newTask);
    //     newTask.user_id = this.childId;
    //     // console.log(newTask);
    //     this.taskService.addTask(newTask);
    // }

    // taskStatusCompleted(task) {
    //     // console.log(task);
    //     // newTask.user_id = this.childId;
    //     // console.log(newTask);
    //     this.taskService.taskStatusCompleted(task);
    // }
}
