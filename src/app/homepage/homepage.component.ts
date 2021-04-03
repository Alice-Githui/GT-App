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
  username: string;
  user: User[]
  repository: Repos[]

  constructor(public serviceService: ServiceService, private http: HttpClient) { }

  getUser(username: string){
    this.serviceService.getProfile(username).subscribe((data)=>{
      this.username = this.serviceService.username
      

    })

  }


  ngOnInit(){
    
  
  }
}

  

