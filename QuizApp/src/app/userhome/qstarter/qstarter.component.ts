import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-qstarter',
  templateUrl: './qstarter.component.html',
  styleUrls: ['./qstarter.component.css']
})
export class QstarterComponent implements OnInit {

  constructor(private r:Router,private ar:ActivatedRoute,private qs:QuizService) { }
  qid;
  quiz;
  subject;
  ngOnInit() {
    this.ar.queryParams.subscribe(p=>{
      this.qid=p['qid'];
      if(!p['qid']){
        this.r.navigate(['../uhome']);
      }
    });
    this.starter();
  }
  public starter(){
    
    this.qs.starter(this.qid).subscribe(
      (res)=>{
        console.log(res);
        this.quiz=res.quiz;
        this.subject=res.subject;
      },
      (err)=>{
        alert("something went wrong while loading starter info");
        console.log(err);
      }
    );
  }
  public cancel(){
    this.r.navigate(['../uhome/viewquizes'],{queryParams:{sid:this.subject[0]['sid']}});
  }
  public launchQuiz(qid){
    sessionStorage.setItem('questions',this.quiz[0]['questions']);
    sessionStorage.setItem('qname',this.quiz[0]['qname']);
    sessionStorage.setItem('sname',this.subject[0]['sname']);
    sessionStorage.setItem('passlimit',this.quiz[0]['passlimit']);
    this.r.navigate(['../uhome/quiz'],{queryParams:{qid:this.qid}});
  }
}

  


