import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Child } from '../models/child';
import { WishList } from '../models/wishList';


@Injectable({
  providedIn: 'root'
})
export class WishListService {
    public wishData : WishList [] ;  
    public dataUpdated: Observable<WishList[]>;
    private dataSubject: Subject<WishList[]>;

    constructor(private http: HttpClient) {
        this.dataSubject = new Subject<WishList[]>();
        this.dataUpdated = this.dataSubject.asObservable();
    }
    getWishList(kidId){
        return this.http.get <WishList[]>("/wishList/getWishListsbyKid/" + kidId).subscribe((data) => {
            this.wishData = data;
            this.dataSubject.next(this.wishData)  } ) } ;
        }
  
