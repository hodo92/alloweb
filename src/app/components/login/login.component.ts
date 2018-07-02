import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from '../../models/parent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public isParent: Boolean
  private error: String = '';
  parent: Parent = new Parent();

  // public get currentParent() {
  //   return this._currentParent;
  // }
  // public set currentParent(value) {
  //   this._currentParent = value;
  // }

  constructor(private parentService: ParentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  parentLogin() {  
    if (!this.parentService.ValidateEmail(this.parent.email)) {
      this.error = '*Email format not valid';
      setTimeout(() => {
        this.error = '';
      }, 3000);
    } else {
      this.parentService.checkParent(this.parent.email);
      this.parentService.dataUpdated.subscribe((resp) => {     
            if(!resp[0]){
            this.error = '*Email not found';
            setTimeout(() => {
              this.error = '';
            }, 3000);
            return;
         } else if (resp[0].email == this.parent.email && resp[0].pw != this.parent.pw || resp[0].email != this.parent.email && resp[0].pw == this.parent.pw) {
          this.error = '*Email address and password do not match';
          setTimeout(() => {
            this.error = '';
          }, 4000);
        } else if (resp[0].email == this.parent.email && resp[0].pw == this.parent.pw && resp[0].is_parent == true) {
          localStorage.setItem("currentUser", resp[0].email);
          localStorage.setItem("isParent", "parent");
          this.router.navigate(['parent-main']);
        } else if (resp[0].email == this.parent.email && resp[0].pw == this.parent.pw && resp[0].is_parent == false) {
                localStorage.setItem("currentUser", resp[0].email);
                localStorage.setItem("isParent", "child");
                this.error = '';
                this.router.navigate(['child-tasks/' + resp[0].user_id]);
        }
      });
    }
  }
}