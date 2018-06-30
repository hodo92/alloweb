import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
// import { TaskService } from '../../services/task.service';
import { ParentTasksComponent } from '../parent-tasks/parent-tasks.component';


@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

    color = 'accent';
    @Input() _isParent: Boolean;
    // _isParent: Boolean = true;
    taskCompletedCheck = false;
    taskCompletedDisabled = false;
    checked = true;

    taskApprovedCheck = false
    taskApprovalDisabled = true;

    paidChecked = false;
    indeterminate = false;
    labelPosition = 'after';
    paidDisabled = true;
    taskCompletionCheck: Boolean = false;

  
    @Input() task: Task; 
    @Output() taskStatusCompletedEmit: EventEmitter<Task> = new EventEmitter();
    @Output() taskStatusIncompleteEmit: EventEmitter<Task> = new EventEmitter();

     tasks: Task[] = new Array<Task>();


    constructor() {}

    ngOnInit() {}

    taskStatusCompleted(task: Task) {
        this.taskStatusCompletedEmit.emit(task);
        this.taskCompletionCheck = true;
    }

    taskStatusIncomplete(task: Task) {
        this.taskStatusIncompleteEmit.emit(task);
        this.taskCompletionCheck = false;
    }
}
