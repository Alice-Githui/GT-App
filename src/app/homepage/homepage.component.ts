import { Component, OnInit} from '@angular/core';
import { ServiceService} from '../user-service/service.service'
import {User} from '../user'
import {Repos} from '../repository/repos'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data: any
  username: string;
  user: User[]
  repository: Repos[]

  constructor(private serviceService: ServiceService, private http: HttpClient) { }

  ngOnInit(){
    this.serviceService.getProfile().subscribe((data) =>{
      this.data = data

      console.log(this.data)

    })

    

   }

  }
  


