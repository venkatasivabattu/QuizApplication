import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private qs:QuizService,private ar:ActivatedRoute,private r:Router) { }
  qid;
  session_data={};
  qsid_array;
  fqsid_array=[];
  fin_array=[];
  questions=[];
  o_options={};
  options={};
  submit;
  answers={};
    f;
    marks=0;
  qdata={};

  ngOnInit() {
    this.submit=0;
    this.ar.queryParams.subscribe(p=>{
      this.qid=p['qid'];
      if(!p['qid']){
        this.r.navigate(['../uhome']);
      }
      else{
        
        this.session_data['q']=Number(sessionStorage.getItem('questions'));
        
        this.session_data['qname']=sessionStorage.getItem('qname');
        
        this.session_data['sname']=sessionStorage.getItem('sname');
        this.session_data['passlimit']=Number(sessionStorage.getItem('passlimit'));

        if(!this.session_data['q']||this.session_data['qname']==null||this.session_data['qname']==''||this.session_data['sname']==null||this.session_data['sname']==''){
          alert("Something went wrong.....");
          this.r.navigate(['../uhome/start-quiz'],{queryParams:{qid:this.qid}});
        }
        else{
          this.qs.qsidLoader(this.qid).subscribe(
            (res)=>{
              if(res.result.length<this.session_data['q']){
                alert("cant open the quiz...");
                this.r.navigate(['../uhome/start-quiz'],{queryParams:{qid:this.qid}});
              }
              else{
                this.qsid_array=res.result;
                this.id_array_maker();
              }
            },
            (err)=>{
              alert("something went wrong while fetching qsids");
              console.log(err);
            }
          );
         
        }
        


      }
    });
    
    
  }
  id_array_maker(){
    var i=0;
    while(i<this.qsid_array.length){
      this.fqsid_array.push(this.qsid_array[i]['qsid']);
      
      i+=1;

    }
    
    this.randomfun();
  }
  randomfun(){
    while(this.fin_array.length<this.session_data['q']){
      var i=Math.floor(Math.random()*this.fqsid_array.length);
      i=this.fqsid_array[i];
      if(!this.fin_array.includes(i)){
        this.fin_array.push(i);
      }
    }
    
    this.getQuestions();
  }
  getQuestions(){
    for(let i=0;i<this.fin_array.length;i++){
      this.qs.getQuestion(this.fin_array[i]).subscribe((res)=>{
        this.questions.push(res.q);
        this.getOptions(res.q[0]['qsid']);
        this.answers[res.q[0]['qsid']]=res.q[0]['answer'];

      },
      (err)=>{
        alert("error while getting questions");
        console.log(err);
      });
    }
    
    
    
    
  }
  cal(f){
    this.f=f;
    this.submit=0;
    
    for(let [x,y] of Object.entries(f)){
      if(y!='' && y!=null){
        this.submit+=1;

      }
    }
    document.getElementById('alert').style.display="flex";
    

  }
  getOptions(qid){
    this.qs.getOptions(qid).subscribe((res)=>{
    this.o_options[qid]=res.options;
    this.option_randfun(qid,this.o_options[qid]);
    },
    (err)=>{
      alert("cant get options..");
      console.log(err);
    });
  }
  option_randfun(qid,array){
    this.options[qid]=[];
    
    while(this.options[qid].length<array.length){
      var i=Math.floor(Math.random()*array.length);
      i=array[i];
      if(!this.options[qid].includes(i)){
        this.options[qid].push(i);
      }
      
    }

  }
  cancel(){
    this.submit=0;
    
    document.getElementById('alert').style.display="none";
  }
  marksCounter(){
    this.marks=0;
    document.getElementById('alert').style.display="none";
    for(let [qsid,ans] of Object.entries(this.f)){
      if(ans==this.answers[qsid]){
        this.marks+=1;
      }
    }
    this.qdata['qid']=this.qid;
    this.qdata['uname']=sessionStorage.getItem('uname');
    this.qdata['date']=new Date();
    this.qdata['marks']=this.marks;
    
    if(this.marks>=this.session_data['passlimit']){
      this.qdata['status']='p';
      
    }
    else{
      this.qdata['status']='f';
    }
   
    this.qs.postquizhistory(this.qdata).subscribe(
      (res)=>{
        if(res.submit){
          
          var data={}
          data['marks']=this.marks;
          data['passlimit']=this.session_data['passlimit'];
          data['status']=this.qdata['status'];
          sessionStorage.removeItem('questions');
          sessionStorage.removeItem('qname');
          sessionStorage.removeItem('sname');
          sessionStorage.removeItem('passlimit');

          sessionStorage.setItem('marks',JSON.stringify(this.marks));
          sessionStorage.setItem('passlimit',JSON.stringify(this.session_data['passlimit']));
          sessionStorage.setItem('status',JSON.stringify(this.qdata['status']));

          this.r.navigate(['../uhome/result']);
        }
        else{
          alert('unable load next page');
        }
      },
      (err)=>{
        alert('something went wrong qh');
        console.log(err);
      }
    );

  }

  
 
}