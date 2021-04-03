import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { OutlayComponent } from './outlay/outlay.component';

const routes: Routes = [];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
