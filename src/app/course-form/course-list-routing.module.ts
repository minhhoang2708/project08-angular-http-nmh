import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list.component';

const courseListRoutes: Routes = [
  { path: 'course-list', component: CourseListComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(courseListRoutes)
  ],
  exports: [RouterModule]
})
export class CourseListRoutingModule { }