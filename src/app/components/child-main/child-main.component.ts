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

 constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
        this.taskService.tasksUpdated.subscribe((data) => {
          this.tasks = data;
          this.user = this.tasks[0].User.first_name;
          this.img  = this.tasks[0].User.user_img;
        });
    }

    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.childId = params.id;
          this.taskService.getTasks(this.childId);
      });
  }

}
