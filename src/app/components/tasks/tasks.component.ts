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

    tasks: Task[] = new Array<Task>();

    constructor(private taskService: TaskService) {
        this.taskService.tasksUpdated.subscribe((data) => {
            this.tasks = data;
            console.log(this.tasks);
            console.log(data);
        });
    }
    

    ngOnInit() {
        console.log("child-tasks.comp");
        this.taskService.getTasks();
        
    }

}
