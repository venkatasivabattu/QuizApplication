import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  
  public quizloader(sid):Observable<any>{
    return this.http.get("http://localhost:3000/quizloader/"+sid);
  }
  public starter(qid):Observable<any>{
    
    return this.http.get('http://localhost:3000/starter/'+qid);
  }
  public qsidLoader(qid):Observable<any>{
    return this.http.get('http://localhost:3000/qsidloader/'+qid);
  }
  public getQuestion(id):Observable<any>{
   
    return this.http.get("http://localhost:3000/getQuestion/"+id);
  }
  public getOptions(id):Observable<any>{
    return this.http.get("http://localhost:3000/getOptions/"+id);
  }
  public postquizhistory(data):Observable<any>{
    return this.http.post("http://localhost:3000/postQuizHistory",data);
  }
  public checkHistory(qid,uname):Observable<any>{
    return this.http.get('http://localhost:3000/checkHistory',{params:{qid:qid,uname:uname}});
  }
  public getHistory():Observable<any>{
    return this.http.get("http://localhost:3000/getHistory/"+sessionStorage.getItem('uname'));
  }
  public analysis():Observable<any>{
    return this.http.get("http://localhost:3000/analysis/"+sessionStorage.getItem('uname'));
  }

}
