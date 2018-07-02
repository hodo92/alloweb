import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from '../../models/parent';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public isParent: Boolean
  private error: String = '';
  parent: Parent = new Parent();

  constructor(private parentService: ParentService, private loginService: LoginService,  private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  parentLogin() {  
    sessionStorage.clear();
    if (!this.parentService.ValidateEmail(this.parent.email)) {
      this.error = '*Email format not valid';
      setTimeout(() => {
        this.error = '';
      }, 3000);
    } else {
      this.parentService.checkParent(this.parent.email);
      this.parentService.dataUpdated.subscribe((resp) => {  
        console.log(resp)   
            if(!resp[0]){
            this.error = '*Email not found';
            setTimeout(() => {
              this.error = '';
            }, 3000);
         } else if (resp[0].email == this.parent.email && resp[0].pw != this.parent.pw || resp[0].email != this.parent.email && resp[0].pw == this.parent.pw) {
          this.error = '*Email address and password do not match';
          setTimeout(() => {
            this.error = '';
          }, 4000);
        } else if (resp[0].email == this.parent.email && resp[0].pw == this.parent.pw && resp[0].is_parent == true) {
          sessionStorage.setItem("loggedIn", "true");
          sessionStorage.setItem("isParent", "parent");
          sessionStorage.setItem("currentUser", resp[0].user_id);
            this.router.navigate(['parent-main']);
        } else if (resp[0].email == this.parent.email && resp[0].pw == this.parent.pw && resp[0].is_parent == false) {
               sessionStorage.setItem("loggedIn", "true");
               sessionStorage.setItem("isParent", "child");
               sessionStorage.setItem("currentUser", resp[0].user_id);
               sessionStorage.setItem("currentUser", resp[0].parent_id);
                this.error = '';
                this.router.navigate(['child-tasks/' + resp[0].user_id]);
        }
      });
    }
  }

 addUser(){
    this.loginService.addNewUser();
}
}