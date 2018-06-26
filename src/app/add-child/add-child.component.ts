import { Component, OnInit } from '@angular/core';
import { Child } from '../models/child';
import { ChildService } from '../services/child.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {
  newChild = new Child

  constructor(private childService: ChildService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      this.newChild.parent_id = params.id
      this.newChild.is_parent = false;
      this.newChild.balance = 0
      console.log(this.newChild)
    })
  }

  addChild(child: Child){
    this.childService.addNewChild(child)

    
  }
}
