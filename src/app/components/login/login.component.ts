import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isParent: Boolean
  constructor(private parentService: ParentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    } else {
      return false;
    }

  }

  parentLogin(parentEmail) {
    if (this.ValidateEmail(parentEmail)) {
      this.parentService.checkParent(parentEmail)
      this.parentService.dataUpdated.subscribe((resp) => {
          if (typeof resp[0] == 'undefined') {
            alert('Email address not found');
            window.location.reload();
          } else if (resp[0].is_parent == true) {
            this.router.navigate(['parent-main']);
            this.parentService.parentEmail = resp[0].email;
          } else  if (resp[0].is_parent == false){
              alert("Please enter a parent's email");
              window.location.reload();
            }
          })
         } else {
        alert('Email format not valid; Please enter a valid email format');
        window.location.reload();
        }
      }
  }

