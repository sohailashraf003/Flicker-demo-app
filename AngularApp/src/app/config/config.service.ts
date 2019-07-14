import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  host: string;
  port: number;
  apiEndpont: string;

}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/config.json';
  static config: Config;

  constructor(private http: HttpClient) { }

  getConfig(): void {
    console.log('Locadinhg app configuration');
    this.http.get<Config>(this.configUrl)
    .toPromise()
    .then( config => {
      console.log("Config File ", config);
      ConfigService.config = config;
    })
  }

  readConfig() {
    console.log(ConfigService.config);
    return ConfigService.config;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

 

  

}
