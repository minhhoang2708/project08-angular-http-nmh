import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import  'rxjs'
import { ICourse } from '../defines/course.interface';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class HttpService {
    
    private apiUrl: string = 'https://5caaba3769c15c00148493f1.mockapi.io/api/angular/v6/courses/';


    constructor(
       private _httpClientService: HttpClient
        ) { }
       

    getItems(): Observable<any>{
        return this._httpClientService.get(this.apiUrl);
    }

    getItemById(id: number): Observable<any>{
        return this._httpClientService.get(this.apiUrl+id);
    }

    addItem(course: ICourse): Observable<any>{
        return this._httpClientService.post(this.apiUrl, course);
    }
    
    editItem(id: number, course: ICourse): Observable<any>{
        let item = {
            id: id,
            name: course.name,
            description: course.description
        }
        return this._httpClientService.put(this.apiUrl + id, item);
    }
    
    deleteItem(id: number): Observable<any>{
        return this._httpClientService.delete(this.apiUrl + id);
    }




}