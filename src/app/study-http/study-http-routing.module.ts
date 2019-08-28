import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list.component';

const studyHttpRoutes: Routes = [
  { path: 'study-http', component: CoursesListComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(studyHttpRoutes)
  ],
  exports: [RouterModule]
})
export class StudyHttpRoutingModule { }