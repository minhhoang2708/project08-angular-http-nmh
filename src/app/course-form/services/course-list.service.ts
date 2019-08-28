import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import  'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICourse } from '../../study-http/defines/course.interface';


@Injectable()
export class CourseListService {
    apiUrl       : string = 'http://localhost:3000/courses/';


    constructor(private _httpClientService: HttpClient ) { }

  

    getAllCourses(): Observable<any>{
        return this._httpClientService.get(this.apiUrl);
    }

    editItem(course: ICourse): Observable<any>{
        return this._httpClientService.put(this.apiUrl + course.id, course);
    }

    deleteCourse(id: number): Observable<any>{
        return this._httpClientService.delete(this.apiUrl + id);
    }

    addItem(course: ICourse): Observable<any>{
        return this._httpClientService.post(this.apiUrl, course);
    }
    
   

}