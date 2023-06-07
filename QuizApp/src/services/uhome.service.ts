import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UhomeService {

  constructor(private http:HttpClient) { }
  public subjectLoader():Observable<any>{
    return this.http.get("http://localhost:3000/subjectLoader");
  }
  public getUserDetails():Observable<any>{
    var u=sessionStorage.getItem('uname');
    const d={};
    
    d['u']=u;

    console.log(u);
    return this.http.get("http://localhost:3000/getUserDetails",{params:d});
  }
}
