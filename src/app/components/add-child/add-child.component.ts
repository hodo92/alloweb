import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Child } from '../../models/child';
import { ChildService } from '../../services/child.service';
import {FileUploader } from 'ng2-file-upload';

const uri = '/childApi/upload';


@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})

export class AddChildComponent implements OnInit {
    newChild = new Child;
    uploader: FileUploader = new FileUploader({ url: uri });
    attachmentList: any = [];


  constructor(private childService: ChildService, 
    private route: ActivatedRoute, 
    private router: Router, 
    public dialogRef: MatDialogRef<AddChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

        
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          this.newChild.user_img = JSON.parse(response).uploadname;
          this.attachmentList.push(JSON.parse(response));
      };
    }


  ngOnInit() {
   // this.route.params.subscribe((params) =>{
      this.newChild.parent_id = this.data.user_id
      this.newChild.is_parent = false;
      this.newChild.balance = 0
      console.log(this.newChild)
    //})
  }

  addChild(child: Child){debugger;
    this.childService.addNewChild(child)
    this.dialogRef.close();
    
  }
}
