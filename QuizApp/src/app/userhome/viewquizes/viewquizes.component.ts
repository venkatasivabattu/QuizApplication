import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-viewquizes',
  templateUrl: './viewquizes.component.html',
  styleUrls: ['./viewquizes.component.css']
})
export class ViewquizesComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private qs:QuizService,private r:Router) { }
  sid;
  subject;
  quizes;
  uname;

  ngOnInit() {
    this.uname=sessionStorage.getItem('uname');
    this.ar.queryParams.subscribe(params=>{
      this.sid=params['sid'];
      if(!params['sid']){
        this.r.navigate(['../']);
      }
      this.quizloader(params['sid']);

      console.log(this.sid,params['sid']);
    });
   
  }
  public quizloader(sid){
    this.qs.quizloader(sid).subscribe((res=>{
      
      this.subject=res.subject[0];
      this.quizes=res.quizes;
      for(let i=0;i<this.quizes.length;i++){
        
        var qid=this.quizes[i]['qid'];
        console.log(qid);

        this.qs.checkHistory(qid,this.uname).subscribe(
          (res)=>{
            console.log(res.result.length);
            if(res.result.length){
            this.quizes[i]['status']=1;
            }
            else{
              this.quizes[i]['status']=0;
            }
            console.log(this.quizes[i]);
          },
        (err)=>{
          alert('error while checking history');
          console.log(err);

        }
        );



      }
      
    }),
    (err)=>{
      alert("error while fetching quizes data");
      console.log(err);
    });

  }


}
