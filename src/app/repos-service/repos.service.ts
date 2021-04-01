import { Injectable } from '@angular/core';
import {Repos} from '../repos'

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  getRepository(){
    return Repos
  }

  constructor() { }
}
