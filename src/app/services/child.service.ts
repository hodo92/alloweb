import { Injectable } from '@angular/core';
import { Child } from '../models/child';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
public childData: Child
  constructor(private http: HttpClient) { }


  addNewChild(child:Child){
    console.log(child);
    return this.http.post<Child>('/child/addChild', { newChild: child }).subscribe((resp)=>{

    })
      
  }
}
