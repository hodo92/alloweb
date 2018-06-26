import { Injectable } from '@angular/core';
import { Child } from '../models/child';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  public childData: Child;
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
addNewChild(child:Child){
  console.log(child);
  return this.http.post<Child>('/child/addChild', { newChild: child }).subscribe((resp)=>{

  })
    
}
}
  