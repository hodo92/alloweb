import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Child } from '../models/child';
import { WishList } from '../models/wishList';



@Injectable({
    providedIn: 'root'
})
export class WishListService {
    wishData: WishList[] = new Array<WishList>();
    public WishListSubject: Subject<WishList[]> = new Subject<WishList[]>();
    public WishListUpdated: Observable<WishList[]>;
    // private dataSubject: Subject<WishList[]>;
    // public dataUpdated: Observable<WishList[]>;

    constructor(private http: HttpClient) {
        this.WishListUpdated = this.WishListSubject.asObservable();
        // this.dataUpdated = this.dataSubject.asObservable();
    }

    getWishList(childId) {
        this.http.get<any[]>('/wishList/' + childId).subscribe((data) => {
            this.wishData = data;
            this.WishListSubject.next(this.wishData)
        })
    }

    // getTasks(): void {
    //     console.log("task.service - getTasks");
    //     this.http.get<any[]>('/child/' + this.userId).subscribe((data) => {
    //         this.tasksArr = data;
    //         this.tasksSubject.next(this.tasksArr);
    //     })
    // }
}

