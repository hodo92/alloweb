import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Child } from '../models/child';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

    public dataUpdated: Observable<Child>;
    private dataSubject: Subject<Child>;

    constructor(private http: HttpClient) {
        this.dataSubject = new Subject<Child>();
        this.dataUpdated = this.dataSubject.asObservable();
    }
}