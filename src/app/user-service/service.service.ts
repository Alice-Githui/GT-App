import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {client_id} from '../clientmodule'
import {client_secret} from '../clientmodule'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public getProfile(searchQuery):
  Observable<any>{
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id${client_id}&client_secret${client_secret}`;
    return this.http.get<any>(dataUrl)
  }
}
