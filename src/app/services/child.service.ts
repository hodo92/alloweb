import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Child } from '../models/child';


@Injectable({
  providedIn: 'root'
})
export class ChildService {
  public Children: Child[];
  public getKids: Child[];
  public dataUpdated: Observable<Child[]>;
  private dataSubject: Subject<Child[]>;

 
  constructor(private http: HttpClient) {
    this.dataSubject = new Subject<Child[]>();
    this.dataUpdated = this.dataSubject.asObservable();
   }

  getAllChildren(parentId){
    let getKidsRoute =  '/parent/getKidsbyParent/' + parentId;
    return this.http.get<Child[]>(getKidsRoute).subscribe( (data) => {
      this.getKids = data;
      this.dataSubject.next(this.getKids);
  });
  
}
}