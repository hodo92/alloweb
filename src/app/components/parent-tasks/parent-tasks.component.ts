import { Component, OnInit, Input } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { ChildService } from '../../services/child.service';
import { Parent } from  '../../models/parent';
import { Task } from '../../models/task';
import { MatDialog } from '@angular/material';
import { TaskService } from '../../services/task.service';
import { AllTasks } from '../../models/allTasks';


@Component({
  selector: 'app-parent-tasks',
  templateUrl: './parent-tasks.component.html',
  styleUrls: ['./parent-tasks.component.css']
})

export class ParentTasksComponent implements OnInit {

  public tasks=[];
  
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
    this.taskService.getAllTasks(this._currentParent.user_id);    
    this.taskService.allTasksUpdated.subscribe((res) => {
      for(let i=0; i<res.length;i++){
       
        for (let j = 0; j < res[i].Tasks.length; j++) {
          res[i].Tasks[j].first_name =  res[i].first_name;
          this.tasks.push(res[i].Tasks[j]);
        }   
      }
    
     });
   });
  }

}
