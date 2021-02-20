import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.github.com/users'



  getUser(username: String) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  constructor(private http: HttpClient) { }
}
