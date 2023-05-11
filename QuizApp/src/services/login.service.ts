import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  public authorize(d):Observable<any>{
    console.log(d);
    return this.http.get('http://localhost:3000/authorize_user',{params:d});
  }
}
