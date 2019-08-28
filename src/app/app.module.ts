import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GitHubModule } from './github/github.module';


import { StudyHttpModule } from './study-http/study-http.module';
import { FormsModule } from '@angular/forms';
import { SpotifyModule } from './spotify/sportify.module';
import { CourseListModule } from './course-form/course-list.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GitHubModule,
    SpotifyModule,
    CourseListModule,
    StudyHttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
