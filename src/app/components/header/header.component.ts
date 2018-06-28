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
        this.parentService.dataUpdated.subscribe((data) => {
            this.parent = data[0];
            console.log(this.parent);
        });
    }

    ngOnInit() {
    }

    logOut() {
        localStorage.removeItem("currentParent");
        this.router.navigate(['']);
        
    }

}
