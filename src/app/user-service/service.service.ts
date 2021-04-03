import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user'
import {Repos} from '../repository/repos'
import {HomepageComponent} from '../homepage/homepage.component'
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

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
  

  getProfile(){
    interface ApiResponse{
      login: string;
      id: number;
      avatar_url: string;
      repos_url: string;
      type: string;
      location: string;
      email: string;
      followers: number;
      following: number;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(`https://api.github.com/users/${this.username}?access_token?client_id= ${environment.accessToken}`).toPromise().then(response =>{
        this.user.login = response.login
        this.user.id = response.id
        this.user.avatar_url = response.avatar_url
        this.user.location = response.location
        this.user.email = response.email
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.created_at = response.created_at
        this.repository.repos_url = response.repos_url
        this.repository.type = response.type 

        resolve('') 
      },
      error =>{

        reject(error)
      })
    })
    return promise
  }
  




}
