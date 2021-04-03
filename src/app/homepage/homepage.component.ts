import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../user-service/service.service'
import {User} from '../user'
import {Repos} from '../repository/repos'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  username: string;
  user: User
  repository: Repos

  constructor(public serviceService: ServiceService) { }

  getUser(){
    this.serviceService.getProfile()
      this.username = this.serviceService.username;

    }

  ngOnInit(){
    this.serviceService.getProfile()
  
  }
}

  

