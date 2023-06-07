import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private r:Router) { }
  
  data={};
  uname;

  ngOnInit() {
    
    this.uname=sessionStorage.getItem('uname');;
    if(!sessionStorage.getItem('marks')){
      this.r.navigate(['../uhome']);

    }
    
    this.data['marks']=Number(sessionStorage.getItem('marks'));
    if(!sessionStorage.getItem('passlimit')){
      this.r.navigate(['../uhome']);

    }
    this.data['passlimit']=Number(sessionStorage.getItem('passlimit'));
    if(!sessionStorage.getItem('status')){
      this.r.navigate(['../uhome']);

    }
    this.data['status']=sessionStorage.getItem('status');
    this.data['status']=this.data['status'].slice(1,-1);
    sessionStorage.removeItem('marks');
    sessionStorage.removeItem('passlimit');
    sessionStorage.removeItem('status');
    
    document.getElementById('body2').style.display="none";
    
    if(this.data['marks']==null||this.data['passlimit']==null||this.data['status']==null||this.data['status']==''){
      this.r.navigate(['../uhome']);
    }
    

    
    
      
    setTimeout(function(){
      document.getElementById('body1').style.display="none";
      document.getElementById('body2').style.display="flex";
    },8000);

  
    
}
}
