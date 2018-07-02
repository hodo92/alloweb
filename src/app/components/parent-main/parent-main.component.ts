import { Component, OnInit, Input } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { ChildService } from '../../services/child.service';
import { Parent } from  '../../models/parent';
import { Child } from '../../models/child';
import { MatDialog } from '@angular/material';
import { AddChildComponent } from '../add-child/add-child.component';


@Component({
  selector: 'app-parent-main',
  templateUrl: './parent-main.component.html',
  styleUrls: ['./parent-main.component.css']
})


export class ParentMainComponent implements OnInit {

  public children: Child[];

  public tasksPending: number;

  private _currentParentEmail = localStorage.getItem("currentParent");
  public _currentParent: Parent = new Parent();

  public get currentParent() {
    return this._currentParent;
  }
  public set currentParent(value) {
    this._currentParent = value;
  }

  constructor(private parentService: ParentService, private childService: ChildService, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
      console.log("parent-main");
      
    this.parentService.checkParent(this._currentParentEmail);
    this.parentService.dataUpdated.subscribe((resp) => {
      this._currentParent = resp[0];
      this.childService.getAllChildren(this._currentParent.user_id);

      this.childService.dataUpdated.subscribe((res) => {
          console.log(res);
          
        this.children = res;
      });
    });
  
    }

    // Must unsubscribe from 
    // ngOnDestroy() {
    //     this.ngUnsubscribe.next();
    //     this.ngUnsubscribe.complete();
    // }
  
  myFunction() {
    return "Log Me out, Scotty";
}

  openDialog(parent: Parent): void {
    this._currentParent = parent;
    console.log(this._currentParent)

    let dialogRef = this.dialog.open(AddChildComponent, {
      data: this._currentParent
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
