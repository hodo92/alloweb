import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { ChildTasksComponent } from './components/child-tasks/child-tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
import { ChildCardComponent } from './components/child-card/child-card.component';

import { ParentService } from './services/parent.service';
import { ChildService } from './services/child.service';
import { TaskService } from './services/task.service';
import { WishListService } from './services/wish-list.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddChildComponent } from './add-child/add-child.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ParentMainComponent,
        ChildTasksComponent,
        HeaderComponent,
        TasksComponent,
        TaskComponent,
        LoginComponent,
        ChildCardComponent,
        AddChildComponent,
        WishListComponent
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
        HttpClientModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        FlexLayoutModule,
        MatProgressBarModule,
        MatDialogModule
    ],
    entryComponents: [
            AddChildComponent
            ],
    providers: [
        ParentService,
        ChildService,
        TaskService,
        WishListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
