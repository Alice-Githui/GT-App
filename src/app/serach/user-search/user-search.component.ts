import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ServiceService} from '../../user-service/service.service'
import {User} from '../../user'
import {Repos} from '../../repository/repos'
import {HttpClient} from '@angular/common/http'
import { pluck, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  username: string;
  user: User
  repository: Repos[]

  constructor(public serviceService: ServiceService, private http:HttpClient) { }

  getUser(){
    pluck('target', 'value'),
    map((value)=>value);

    }

    

  ngOnInit(){
  }

}
