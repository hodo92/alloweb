import { Component, OnInit } from '@angular/core'; //, Input, Inject
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Subscriber } from 'rxjs';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    public childId: number = 2;
    tasks: Task[] = new Array<Task>();

    constructor(private taskService: TaskService) {
        this.taskService.tasksUpdated.subscribe((data) => {
            this.tasks = data;
        });
    }
    
    ngOnInit() {
        this.taskService.getTasks(this.childId);
    }

}
