import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    color = 'accent';
    taskCompletedCheck = false;
    taskCompletedDisabled = false;
    checked = true;

    taskApprovedCheck = false
    taskApprovalDisabled = true;

    paidChecked = false;
    indeterminate = false;
    labelPosition = 'after';
    paidDisabled = true;

    @Input() task: Task;
    @Output() taskStatusCompletedEmit: EventEmitter<Task> = new EventEmitter();


    constructor() { }

    ngOnInit() { }
    // ngOnChanges() {
    //     if (this.taskCompletedCheck == true) {
    //         console.log("this.checked = true");
    //         this.taskCompletedDisabled = true;
    //         this.taskApprovalDisabled = false;
    //     }
    // }

    taskStatusCompleted(task: Task) {
        // console.log(task);
        this.taskStatusCompletedEmit.emit(task);

    }
}
