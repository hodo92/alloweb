import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { Parent } from '../../models/parent';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public parent: Parent;

    constructor(private parentService: ParentService, private router: Router) {  }

    ngOnInit() { 
        if (sessionStorage.getItem("loggedIn") == "true") {
            this.parentService.dataUpdated.subscribe((data) => {
                this.parent = data[0];
            });
         }
   }

    logOut() {
        sessionStorage.clear());
        this.parent = undefined;
        this.router.navigate(['']);
    }

    navigateToChildTasks(userId) {
        this.router.navigate(['child-tasks/' + userId]);
    }

    navigateToChildWishList(userId) {
        console.log(userId);
        this.router.navigate(['/wish-list/' + userId]);
    }
}
