import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable()

export class LoginService {
    public User: User;
    public checkEmail: User;
    public dataUpdated: Observable<User>;
    private dataSubject: Subject<User>;

    constructor(private http: HttpClient) {
        this.dataSubject = new Subject<User>();
        this.dataUpdated = this.dataSubject.asObservable();
    }

    checkUser(email) {
        let userEmail = '/parent/' + email;
        return this.http.get<User>(userEmail).subscribe((data) => {
            this.checkEmail = data;
            this.dataSubject.next(this.checkEmail)
        })
    }

    ValidateEmail(mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }

}
