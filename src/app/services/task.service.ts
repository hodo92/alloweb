import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable, Subject } from 'rxjs';
import { AllTasks } from '../models/alltasks';

@Injectable({
    providedIn: 'root'
})
export class TaskService implements OnInit {

    tasksArr: AllTasks[] = new Array<AllTasks>();
    
    public getAll: Task[];
    public tasksSubject: Subject<Task[]> = new Subject<Task[]>();
    public tasksUpdated: Observable<Task[]>;
    public allTasksSubject: Subject<AllTasks[]> = new Subject<AllTasks[]>();
    public allTasksUpdated: Observable<AllTasks[]>;


    constructor(private http: HttpClient) {
        this.tasksUpdated = this.tasksSubject.asObservable();
        this.allTasksUpdated = this.allTasksSubject.asObservable();
    }

    ngOnInit() { }

    getTasks(childId): void {
        this.http.get<any[]>('/child/' + childId).subscribe((data) => {
            this.tasksArr = data;
            console.log(data);
                      
            this.tasksSubject.next(this.tasksArr);
        })
    }
    
    getAllTasks(parentId) {
        let getTasksRoute = '/parent/getTasksbyParent/' + parentId;
       return this.http.get<AllTasks[]>((getTasksRoute)).subscribe((data) => {
           this.tasksArr = data;
            this.allTasksSubject.next(this.tasksArr);            
        })
    }

    addTask(task) {
        this.http.post<any[]>('/child', task).subscribe((data) => {
            this.tasksArr = data;
            this.tasksSubject.next(this.tasksArr);
        })
    }












    taskStatusCompleted(task) {
        console.log("task");
        console.log(task);
        
        // debugger;
        // task.status_id = 3;
        this.http.put<any>('/child/updateStatus', task).subscribe((data) => {
            this.tasksArr = data;
            console.log(this.tasksArr);
            
            this.tasksSubject.next(this.tasksArr);
        });
    }
}
