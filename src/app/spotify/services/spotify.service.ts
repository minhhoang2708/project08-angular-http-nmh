import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SpotifyService {
    API_URL_SEARCH: string = 'https://api.spotify.com/v1/search/';
    constructor(private _httpClientService: HttpClient ) { }




    searchArtist(name: string): Observable<any>{
        const headers = new HttpHeaders({
            Authorization: ''
        })

        let params = new HttpParams()
        .set('q', name)
        .set('type','artist')
        return this._httpClientService.get(this.API_URL_SEARCH,{headers, params});
    }
   

}