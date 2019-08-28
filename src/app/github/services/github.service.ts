import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import  'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class GithubService {
    apiUrl       : string = 'https://api.github.com/';
    clientID     : string = '1b76e0b1fcc41653ff62';
    clientSecret : string = '82111fa2c47affafe7337b166e781539100cac1a';

    constructor(private _httpClientService: HttpClient ) { }

    getUser(name: string): Observable<any>{
        return this._httpClientService.get(this.apiUrl + 'users/' + name +'?client_id=' + this.clientID +'&client_secret=' +this.clientSecret);
    }

    getRepo(username: string): Observable<any>{
        return this._httpClientService.get(this.apiUrl + 'users/' + username + '/repos' +'?client_id=' + this.clientID +'&client_secret=' +this.clientSecret);
    }

}