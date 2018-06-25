import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { ChildTasksComponent } from './components/child-tasks/child-tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';


import { ParentService } from './services/parent.service';
import { ChildService } from './services/child.service';
import { TaskService } from './services/task.service';
import { GoalService } from './services/goal.service';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';





@NgModule({
    declarations: [
        AppComponent,
        ParentMainComponent,
        ChildTasksComponent,
        HeaderComponent,
        ParentChildComponent,
        TasksComponent,
        TaskComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatGridListModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule 
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
