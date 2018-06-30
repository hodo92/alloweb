import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Child } from '../models/child';



@Injectable({
    providedIn: 'root'
})
export class ChildService {
  
  public childData: Child
  public Children: Child[];
  public getKids: Child[];
  public dataUpdated: Observable<Child[]>;
  private dataSubject: Subject<Child[]>;
    public childUpdated: Observable<Child>;
    private childSubject: Subject<Child>;

    constructor(private http: HttpClient) {
        this.dataSubject = new Subject<Child[]>();
        this.dataUpdated = this.dataSubject.asObservable();
        this.childSubject = new Subject<Child>();
        this.childUpdated = this.childSubject.asObservable();

    }

    getAllChildren(parentId) {
        let getKidsRoute = '/parent/getKidsbyParent/' + parentId;
        return this.http.get<Child[]>(getKidsRoute).subscribe((data) => {
            this.getKids = data;
            this.dataSubject.next(this.getKids);
        });
    }
    
    addNewChild(child: Child) {
        console.log(child);
        return this.http.post<Child>('/parent/addChild', { newChild: child }).subscribe((resp) => {
        })
    }

    getChildById(childId){
        console.log(childId)
        return this.http.get<Child>('/child/getChildById/' + childId).subscribe((resp)=>{
            this.childData = resp
            this.childSubject.next(this.childData);
            
        })
    }
}

