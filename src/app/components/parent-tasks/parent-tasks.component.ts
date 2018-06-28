import { Component, OnInit, Input } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { ChildService } from '../../services/child.service';
import { Parent } from  '../../models/parent';
import { Task } from '../../models/task';
import { MatDialog } from '@angular/material';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-parent-tasks',
  templateUrl: './parent-tasks.component.html',
  styleUrls: ['./parent-tasks.component.css']
})

export class ParentTasksComponent implements OnInit {

  public tasks: Task[];

  private _currentParentEmail = localStorage.getItem("currentParent");
  public _currentParent: Parent = new Parent();

  public get currentParent() {
    return this._currentParent;
  }
  public set currentParent(value) {
    this._currentParent = value;
  }

  constructor(private parentService: ParentService, public dialog: MatDialog, private taskService: TaskService ) { }

  ngOnInit() {
    this.parentService.checkParent(this._currentParentEmail);
    this.parentService.dataUpdated.subscribe((resp) => {
    this._currentParent = resp[0]; 
    console.log(resp);
    
    this.taskService.getAllTasks(this._currentParent.user_id);
    console.log(this._currentParent.user_id);
    
    this.taskService.allTasksUpdated.subscribe((res) => {
      this.tasks = res;
      console.log(this.tasks);
      
     });
   });
    
  }

}
