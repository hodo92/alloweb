import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
// import { TaskService } from '../../services/task.service';
import { ParentTasksComponent } from '../parent-tasks/parent-tasks.component';


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

     tasks: Task[] = new Array<Task>();


    constructor() {}
    // constructor(private parentTask: ParentTasksComponent ) {}

    ngOnInit() { }

    taskStatusCompleted(task: Task) {
        this.taskStatusCompletedEmit.emit(task);

    }
}
