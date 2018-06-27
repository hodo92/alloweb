import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child-tasks',
    templateUrl: './child-tasks.component.html',
    styleUrls: ['./child-tasks.component.css']
})
export class ChildTasksComponent implements OnInit {
    // inputFocus: boolean = false;
    constructor() { }

    ngOnInit() {
        req.params
    }

    // showAllAddTask() {
    //     console.log("Trying to focus");
        
    //     this.inputFocus = true;
    // }

    // addTask() {
    //     this.inputFocus = false;
    // }

}
