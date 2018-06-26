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
    private dataSubject: Subject<WishList[]>;
    public dataUpdated: Observable<WishList[]>;
    
    
    // public tasksSubject: Subject<Task[]> = new Subject<Task[]>();
    // public tasksUpdated: Observable<Task[]>;

    constructor(private http: HttpClient) {
        this.dataSubject = new Subject<WishList[]>();
        this.dataUpdated = this.dataSubject.asObservable();
    }
    getWishList(kidId){
        return this.http.get <WishList[]>("/wishList/getWishListsbyKid/" + kidId).subscribe((data) => {
            this.wishData = data;
            this.dataSubject.next(this.wishData)  } ) } ;
        }
  
