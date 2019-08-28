import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './study-http/components/courses-list.component';
import { GithubComponent } from './github/components/github.component';

const appRoutes: Routes = [
  // { path: '', redirectTo:'/study-http' , pathMatch: 'full'},
  // { path: '', redirectTo:'/github' , pathMatch: 'full'},
  // { path: '', redirectTo:'/spotify' , pathMatch: 'full'},
  { path: '', redirectTo:'/course-list' , pathMatch: 'full'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }