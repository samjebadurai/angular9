import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { NewComponent } from '../app/new/new.component'

const routes: Routes = [
  { path: '', component: NewComponent },
  { path: 'new', component: NewComponent },
  { path: 'one', component: NewComponent },
  { path: 'two', component: NewComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, 
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
