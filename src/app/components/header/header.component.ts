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
    constructor(private parentService: ParentService, private router: Router) {
        
    }

    ngOnInit() {
        this.parentService.dataUpdated.subscribe((data) => {
            this.parent = data[0];
            console.log(this.parent);
        });
    }

    logOut() {
        localStorage.removeItem("currentParent");
        this.parent = undefined;
        this.router.navigate(['']);
    }

    navigateToChildTasks(userId) {
        this.router.navigate(['child-view/' + userId]);
    }

    navigateToChildWishList(userId) {
        console.log(userId);
        this.router.navigate(['/wish-list/' + userId]);
        
    }
}
