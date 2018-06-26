import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {

    // tiles = [
    //     { text: 'Icon', cols: 1, rows: 2, color: 'lightblue', align: 'center' },
    //     { text: 'Title', cols: 3, rows: 1, color: 'lightgreen', align: 'left' },
    //     { text: 'Description', cols: 3, rows: 1, color: 'lightpink', align: 'left' },
    // ];
    color = 'accent';
    taskCompletedCheck = false;
    taskCompletedDisabled = false;

    taskApprovedCheck = false
    taskApprovalDisabled = true;

    paidChecked = false;
    indeterminate = false;
    labelPosition = 'after';
    paidDisabled = true;

    @Input() task: Task; // = new Task();

    // tasks: Task[] = new Array<Task>();

    constructor() {
        //private taskService: TaskService
        // this.taskService.tasksUpdated.subscribe((data) => {
        //     this.tasks = data;
        //     console.log(this.tasks);
        //     console.log(data);
        // });
        
    }

    ngOnInit() {
        
    }
    ngOnChanges() {
        if (this.taskCompletedCheck == true) {
            console.log("this.checked = true");

            this.taskCompletedDisabled = true;
            this.taskApprovalDisabled = false;
        }

    }

}
