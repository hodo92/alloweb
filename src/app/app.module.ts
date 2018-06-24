import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentMainComponent } from './parent-main/parent-main.component';
import { ChildTasksComponent } from './child-tasks/child-tasks.component';
import { HeaderComponent } from './header/header.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
