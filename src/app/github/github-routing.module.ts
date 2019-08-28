import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './components/github.component';

const githubRoutes: Routes = [
  { path: 'github', component: GithubComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(githubRoutes)
  ],
  exports: [RouterModule]
})
export class GithubRoutingModule { }