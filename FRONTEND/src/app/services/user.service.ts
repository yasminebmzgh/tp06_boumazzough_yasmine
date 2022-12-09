import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new Subject<User>();
  userObservable = this.user.asObservable();

  addUser(user: User){
    this.user.next(user);  
  }

  constructor() { }
}
