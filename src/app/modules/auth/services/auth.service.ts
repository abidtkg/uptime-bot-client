import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../interfaces/auth.interface';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { API_BASE_URL } from '../../../app.config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    
    constructor(
        private http: HttpClient
    ) { }

    login(user: ILogin): Observable<ILoginResponse> {
        return this.http.post<ILoginResponse>(`${API_BASE_URL}/auth/login`, user)
        .pipe(
            retry(1),
            catchError(this.errorHandeller)
        );
    }

    errorHandeller(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}
