import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { ParentTasksComponent } from '../parent-tasks/parent-tasks.component';

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

     tasks: Task[] = new Array<Task>();

    constructor(private parentTask: ParentTasksComponent ) {
        // private taskService: TaskService
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
