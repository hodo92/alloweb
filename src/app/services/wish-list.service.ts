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
    ebayData: WishList[] = new Array<WishList>();
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
            'OAD&keywords=' + keyword + '&paginationInput.entriesPerPage=3&callback=JSONP_CALLBACK')
        .subscribe((data) => {
            let arr = data.json().findItemsByKeywordsResponse[0].searchResult[0].item;
            for (let i=0 ; i<arr.length;i++){
              this.ebayData.push(arr[i]);
              
                // console.log(arr.title[0], arr.subtitle[0], arr.galleryURL[0], arr.sellingStatus[0].currentPrice[0].__value__);
            }
            console.log(this.ebayData)
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

