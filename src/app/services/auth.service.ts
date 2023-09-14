import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const loginUrl = `${this.url}login/`; 
    return this.http.post(loginUrl, { username, password });
  }

  logout() {
    const logoutUrl = `${this.url}logout/`; 
    return this.http.post(logoutUrl, {});
  }
}
