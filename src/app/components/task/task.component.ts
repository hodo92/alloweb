import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    // tiles = [
    //     { text: 'Icon', cols: 1, rows: 2, color: 'lightblue', align: 'center' },
    //     { text: 'Title', cols: 3, rows: 1, color: 'lightgreen', align: 'left' },
    //     { text: 'Description', cols: 3, rows: 1, color: 'lightpink', align: 'left' },
    // ];
    color = 'accent';
    checked = false;
    disabled = false;
    approvalDisabled = true;

    paidChecked = false;
    indeterminate = false;
    labelPosition = 'after';
    paidDisabled = true;

  constructor() { }

  ngOnInit() {
  }

}
