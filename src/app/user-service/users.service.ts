import { Injectable } from '@angular/core';
import {user} from '../userDef'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(){
    return user
  }

  constructor() { }
}
