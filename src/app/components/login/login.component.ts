import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private parentService: ParentService) {}

  ngOnInit() {}

  parentLogin(parentEmail) {
    
  }

}
