import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable, Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class TaskService implements OnInit {
    tasksArr: Task[] = new Array<Task>();
    userId: number = 2;
    public tasksSubject: Subject<Task[]> = new Subject<Task[]>();
    public tasksUpdated: Observable<Task[]>;

    constructor(private http: HttpClient) {
        this.tasksUpdated = this.tasksSubject.asObservable();
    }

    ngOnInit() { }

    getTasks(): void {
        this.http.get<any[]>('/getTasksbyKid' + this.userId).subscribe((data) => {
            this.tasksArr = data;
            console.log(this.tasksArr);
            console.log(data);
            
            this.tasksSubject.next(this.tasksArr);
        })
    }

    // addTask(task: Task) {
    //     this.http.post<any[]>('/task-api', task).subscribe((data) => {
    //         this.tasksArr = data;
    //         this.tasksSubject.next(this.tasksArr);
    //     })
    // }
}
