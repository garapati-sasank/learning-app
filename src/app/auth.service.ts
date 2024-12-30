import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestI, LoginResponseI } from './interfaces/authI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(signUpInfo: any) {
    return this.http.post('http://localhost:3010/api/signup', signUpInfo);
  }

  login(loginInfo: LoginRequestI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>('http://localhost:3010/api/login', loginInfo);
  }

  logout() { }
}