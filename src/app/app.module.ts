import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentMainComponent } from './parent-main/parent-main.component';
import { ChildTasksComponent } from './child-tasks/child-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentMainComponent,
    ChildTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
