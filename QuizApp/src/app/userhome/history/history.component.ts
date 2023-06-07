import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private qs:QuizService) { }
  h;
  ngOnInit() {
    this.getHistory();
  }
  getHistory(){
    this.qs.getHistory().subscribe(
      (res)=>{
        this.h=res.result;
        
        this.getQname();
      },
      (err)=>{
        alert("error while fetching history");
        console.log(err);
      }
    );
  }
  getQname(){
    for(let i=0;i<this.h.length;i+=1){
      this.qs.starter(this.h[i]['qid']).subscribe(
        (res)=>{
          
          this.h[i]['qname']=res.quiz[0]['qname'];
          this.h[i]['sname']=res.subject[0]['sname'];
          if(this.h[i]['status']=='p'){
            this.h[i]['status']='Pass';

          }
          else{
            this.h[i]['status']='Fail';
          }

        },
        (err)=>{
          alert('error getting hdata');
          console.log(err);
        }
      );
    }
    console.log(this.h);
  }

}
