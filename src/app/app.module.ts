import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { ChildTasksComponent } from './components/child-tasks/child-tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';

import { ParentService } from './services/parent.service';
import { ChildService } from './services/child.service';
import { TaskService } from './services/task.service';
import { GoalService } from './services/goal.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentMainComponent,
    ChildTasksComponent,
    HeaderComponent,
    ParentChildComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
    providers: [
        ParentService,
        ChildService,
        TaskService,
        GoalService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
