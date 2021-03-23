import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieSearch {

    readonly apikey = 'be42279e';
    readonly URL = `https://www.omdbapi.com/`;

    constructor(private http: HttpClient) { }

    findMovie(movieName: String): Observable<any> {
        return this.http.get(`${this.URL}?s=${movieName}&apikey=${this.apikey}`);
    }
}