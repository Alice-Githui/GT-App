import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {HomepageComponent} from './homepage/homepage.component'


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
