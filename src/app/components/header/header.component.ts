import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { Parent } from '../../models/parent';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ChildService } from '../../services/child.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public childBalance: number;
    public parent: Parent;
    
    constructor(private parentService: ParentService,
        private userService: UserService,
        private router: Router, private childService: ChildService) {

        

        // this.parentService.dataUpdated.subscribe((data) => {
        //     console.log(data)
        //     this.parent = data[0];
        // });
    }

    // Daniel - buy wish - header change
    ngOnInit() {
        this.childService.childUpdated.subscribe((data) => {
            console.log("header data from childService childUpdated");
            console.log(data);

            this.childBalance = data.balance;
        });
        
        if (sessionStorage.getItem("loggedIn") == "true") {
            this.parentService.dataUpdated.subscribe((data) => {
                console.log(data)
                this.parent = data[0];
            });
        }
    }

    logOut() {
        sessionStorage.clear();
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
