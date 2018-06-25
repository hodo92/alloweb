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

  parentLogin(parentEmail) {
     this.parentService.checkParent(parentEmail)
     this.parentService.dataUpdated.subscribe((resp)=>{
      if(resp[0].is_parent){
        this.router.navigate(['parent-main']);
      } else{
        alert('Please enter a valid email');
        this.router.navigate(['']);
      }
     })
  }
}
