import { Component, OnInit } from '@angular/core';
import {Repository} from '../repository';
import {ReposService} from '../repos-service/repos.service'

@Component({
  selector: 'app-outlay',
  templateUrl: './outlay.component.html',
  styleUrls: ['./outlay.component.css']
})
export class OutlayComponent implements OnInit {

  repos: Repository[];

  constructor(reposService: ReposService) {
    this.repos = reposService.getRepository()
   }

  ngOnInit(): void {
  }

}
