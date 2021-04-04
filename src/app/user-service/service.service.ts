import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user'
import {Repos} from '../repository/repos'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  username: string;
  user: User
  repository: Repos

  constructor(private http: HttpClient) { }


  getProfile(){
    // return this.http.get('https://api.github.com/users')
      return this.http.get(`https://api.github.com/users/Alice-Githui?access_token?client_id= ${environment.accessToken}`)
      }
        
  
}
