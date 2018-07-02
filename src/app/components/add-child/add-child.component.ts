import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Child } from '../../models/child';
import { ChildService } from '../../services/child.service';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {
  newChild = new Child;

  constructor(private childService: ChildService, private route: ActivatedRoute, private router: Router, public dialogRef: MatDialogRef<AddChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

      this.newChild.parent_id = this.data.user_id
      this.newChild.is_parent = false;
      this.newChild.balance = 0
  }

  addChild(child: Child){
    this.childService.addNewChild(child)
    this.dialogRef.close();
  }
}
