import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  public authorize(d):Observable<any>{
    
    return this.http.get('http://localhost:3000/authorize_user',{params:d});
  }
  public checkUname(u):Observable<any>{
    console.log(u);
    return this.http.get("http://localhost:3000/checkUname/"+u);
  }
  public register(d):Observable<any>{
    return this.http.post('http://localhost:3000/register',d);
  }
  public resetP(d):Observable<any>{
    
    return this.http.put('http://localhost:3000/resetP',d);
  }
  public updateP(f):Observable<any>{
    return this.http.put('http://localhost:3000/updateP',f);
  }
 
}
