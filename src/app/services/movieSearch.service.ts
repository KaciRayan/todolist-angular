import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieSearch {

    URL: String = "http://www.omdbapi.com/?i=tt3896198&apikey=be42279e";

    constructor(private http: HttpClient) { }

    findMovie(movieName: String): Observable<any> {
        return this.http.get(`${this.URL}&s=${movieName}*`);
    }
}