import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { ParentTasksComponent } from './components/parent-tasks/parent-tasks.component';
import { ChildTasksComponent } from './components/child-tasks/child-tasks.component';
import { AddChildComponent } from './components/add-child/add-child.component';
import { ChildMainComponent } from './components/child-main/child-main.component';
import { WishListSearchComponent } from './components/wish-list-search/wish-list-search.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    // Parent routes
    { path: 'parent-main', component: ParentMainComponent },
    { path: 'child-view/:id', component: ChildMainComponent },
    { path: 'add-child/:id', component: AddChildComponent },

    // Child routes
    { path: 'child-tasks/:id', component: ChildMainComponent },
    { path: 'wish-list/:id', component: WishListComponent },

    { path: 'parent-tasks', component: ParentTasksComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
