import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    API_URL = 'zwiftee:/';

    constructor(private http: HttpClient) {
    }

    getSessions(): Observable<object> {
        return this.http.get(`${this.API_URL}/sessions`).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    getSession(id) {
        return this.http.get(`${this.API_URL}/session/` + id).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    private  handleError(error: HttpErrorResponse) {
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
    }
}
