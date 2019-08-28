import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CourseListService } from './services/course-list.service';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './components/course-list.component';
import { CourseListRoutingModule } from './course-list-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        CourseListRoutingModule,
        FormsModule,
        HttpClientModule,
        ],
    declarations: [
        CourseListComponent

    ],
    exports: [CourseListComponent],
    providers: [CourseListService],
})
export class CourseListModule { }