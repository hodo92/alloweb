import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Child } from '../models/child';

=======
import { Child } from '../models/child';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
>>>>>>> e4d427f41fd9f407f30926ebe8c48737838d9153

@Injectable({
  providedIn: 'root'
})
export class ChildService {
<<<<<<< HEAD
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
  
=======
public childData: Child
  constructor(private http: HttpClient) { }


  addNewChild(child:Child){
    console.log(child);
    return this.http.post<Child>('/child/addChild', { newChild: child }).subscribe((resp)=>{

    })
      
  }
>>>>>>> e4d427f41fd9f407f30926ebe8c48737838d9153
}
}