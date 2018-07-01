import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Subscriber } from 'rxjs';
import { WishList } from '../../models/wishList';
import { WishListService } from '../../services/wish-list.service';


@Component({
    selector: 'app-child-main',
    templateUrl: './child-main.component.html',
    styleUrls: ['./child-main.component.css']
})
export class ChildMainComponent implements OnInit {

    public childId: number;
    tasks: Task[] = new Array<Task>();
    public user: String;
    public img = String;
    public balance;
    public currentRoute: String;
    public wishListData: WishList[];
    public progress;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService,
        private wishListService: WishListService) {

        this.taskService.tasksUpdated.subscribe((data) => {
            this.tasks = data;
            this.user = this.tasks[0].User.first_name;
            this.img = this.tasks[0].User.user_img;
            this.balance = this.tasks[0].User.balance;
        });
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.childId = params.id;
            this.taskService.getTasks(this.childId);
        });

        // Current route finding - for display correct info to parent or child user
        // /child-task for child & /child-view for parent
        this.currentRoute = this.router.url.slice(1, 11);
        console.log(this.currentRoute);

        this.wishListService.getWishList(this.childId)
        this.wishListService.WishListUpdated.subscribe((data) => {
            this.wishListData = data;
            for (let i = 0; i < this.wishListData.length; i++) {
                this.wishListData[i].progress = this.balance / this.wishListData[i].price * 100;
                console.log(this.wishListData[i].progress);
            }

            console.log(this.wishListData)

        })
    }

    addTask(newTask) {
        newTask.user_id = this.childId;
        this.taskService.addTask(newTask);
    }

    // Change task status_id to 2 complete with a put request
    taskComplete(task) {
        // newTask.user_id = this.childId;
        this.taskService.taskComplete(task);
    }

    // Change back the task status_id to 1 outstanding / incomplete with a put request
    taskIncomplete(task) {
        this.taskService.taskIncomplete(task);
    }

    approveTask(task) {
        console.log("child-main approveTask");
        console.log(task);

        this.taskService.approveTask(task);
    }
}
