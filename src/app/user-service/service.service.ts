import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user'
import {Repos} from '../repository/repos'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  username: string;
  user: User
  repository: Repos



  constructor(private http: HttpClient) { 
    this.user = new User('', '', 0, '', '', '', 0, 0, new Date())


  }
  

  getProfile(inputValue):Observable<any>{
      return this.http.get(`https://api.github.com/users/${this.username}?access_token?client_id= ${environment.accessToken}`)
      .pipe(
        map((response: any) => response.items)
      );
      }
        
  
}
