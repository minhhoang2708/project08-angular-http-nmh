import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list.component';
import { StudyHttpRoutingModule } from './study-http-routing.module';
import { HttpService } from './services/http.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        StudyHttpRoutingModule,
        HttpModule,
        HttpClientModule],
    declarations: [
        CoursesListComponent

    ],
    exports: [CoursesListComponent],
    providers: [HttpService],
})
export class StudyHttpModule { }