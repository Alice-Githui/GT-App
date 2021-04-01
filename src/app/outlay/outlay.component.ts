import { Component, OnInit } from '@angular/core';
import {Repository} from '../repository';
import {ReposService} from '../repos-service/repos.service'
import {User} from '../user'
import {UsersService} from '../user-service/users.service'

@Component({
  selector: 'app-outlay',
  templateUrl: './outlay.component.html',
  styleUrls: ['./outlay.component.css']
})
export class OutlayComponent implements OnInit {

  repos: Repository[];
  users: User[]

  constructor(reposService: ReposService, usersService:UsersService) {
    this.repos = reposService.getRepository(),
    this.users = usersService.getUsers()
   }

  ngOnInit(): void {
  }

}
