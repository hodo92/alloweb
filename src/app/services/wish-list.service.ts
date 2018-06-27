import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Child } from '../models/child';
import { WishList } from '../models/wishList';
import { Jsonp } from '@angular/http';




@Injectable({
    providedIn: 'root'
})
export class WishListService {
    wishData: WishList[] = new Array<WishList>();
    public WishListSubject: Subject<WishList[]> = new Subject<WishList[]>();
    public WishListUpdated: Observable<WishList[]>;
    // private dataSubject: Subject<WishList[]>;
    // public dataUpdated: Observable<WishList[]>;
    
    constructor(private http: HttpClient, private jsonp: Jsonp) {
        this.WishListUpdated = this.WishListSubject.asObservable();
        // this.dataUpdated = this.dataSubject.asObservable();
    }

    getWishList(childId) {
        this.http.get<any[]>('/wishList/' + childId).subscribe((data) => {
            this.wishData = data;
            this.WishListSubject.next(this.wishData)
        })
    }

    findItemsByKeywords(keyword: string) {
        return this.jsonp.request('http://svcs.ebay.com/services/search/FindingService/'+
                'v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=hodo'+
                '-alloweb-PRD-d7141958a-c562edf1&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYL'+
            'OAD&keywords=' + keyword + '&paginationInput.entriesPerPage=10&callback=JSONP_CALLBACK')
        .subscribe((data) => {
            console.log(data.json());
    });
    }


    // getTasks(): void {
    //     console.log("task.service - getTasks");
    //     this.http.get<any[]>('/child/' + this.userId).subscribe((data) => {
    //         this.tasksArr = data;
    //         this.tasksSubject.next(this.tasksArr);
    //     })
    // }
}

