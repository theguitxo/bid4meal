import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  /**
   * @name loadJSONData
   * @description loads a JSON file
   * @param file file to load
   * @returns an observable object that contains an array of objects
   */
  loadJSONData(file: string): Observable<any> {

    return this.http.get<any>(file, {
      responseType: 'json'
    });

  }

  loadJSONPData(url: string, callback: string) {
    return this.http.jsonp(url, callback);
  }

}
