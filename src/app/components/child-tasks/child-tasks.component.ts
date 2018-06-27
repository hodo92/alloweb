import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
    selector: 'app-child-tasks',
    templateUrl: './child-tasks.component.html',
    styleUrls: ['./child-tasks.component.css']
})
export class ChildTasksComponent implements OnInit {
    // inputFocus: boolean = false;
    childId: number;
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.childId = params.id;
            console.log(this.childId);
        });
    }
}
