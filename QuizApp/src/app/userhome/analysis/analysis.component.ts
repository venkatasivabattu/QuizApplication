import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor(private qs:QuizService) { }
d=[];
divWidth: string = '0%'; 
targetWidth ;
color;
  ngOnInit() {
    
    this.analysis();
    document.getElementById('d2').style.display="none";
    setTimeout(function(){
      document.getElementById('d1').style.display="none";
      document.getElementById('d2').style.display="flex";
      document.getElementById('d22').style.display="block";
      
    },1000);
    setTimeout(() => {
      this.divWidth = `${Number(this.d[2])}%`;
      
    }, 1100);
   
  }
  analysis(){
    this.qs.analysis().subscribe(
      (res)=>{
       
        this.d[0]=res.r1[0]['count(*)'];
        this.d[1]=res.r2[0]['count(*)'];
        this.d[2]=((this.d[1])*100)/this.d[0];
        if(!Number.isInteger(this.d[2]))
        {this.d[2]=this.d[2].toFixed(2);}
        var x=this.d[2];
        if(x>=60){
          this.color='green';
          
        }
        else if(x>=40 && x<60){
          this.color='orange';
          

        }
        else{
          this.color='red';
          
        }
        console.log(this.d);
      },
      (err)=>{
        alert("error inititing the page");
        console.log(err);
      }
    );


  }
}
