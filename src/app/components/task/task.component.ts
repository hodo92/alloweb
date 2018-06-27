import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Task } from '../../models/task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {

    color = 'accent';
    taskCompletedCheck = false;
    taskCompletedDisabled = false;

    taskApprovedCheck = false
    taskApprovalDisabled = true;

    paidChecked = false;
    indeterminate = false;
    labelPosition = 'after';
    paidDisabled = true;

    @Input() task: Task;

    constructor() { }

    ngOnInit() { }
    ngOnChanges() {
        if (this.taskCompletedCheck == true) {
            console.log("this.checked = true");
            this.taskCompletedDisabled = true;
            this.taskApprovalDisabled = false;
        }
    }
}
