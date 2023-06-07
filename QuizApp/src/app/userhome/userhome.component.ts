import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UhomeService } from 'src/services/uhome.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private r:Router,private uhs:UhomeService,private ar:ActivatedRoute) { }
sid;
name;
  ngOnInit() {
    this.name=sessionStorage.getItem('uname');
    if(sessionStorage.getItem('uname')==null){
      console.log('go to login');
      this.r.navigate(['../']);

    }
    this.subloader();
    
  }
  
  
  
  subjects;
subloader(){
  this.uhs.subjectLoader().subscribe(
    (res)=>{
      this.subjects=res.result;
      console.log(res);
    },
    (err)=>{
      alert("Something went wrong");
      console.log(err);
    }
  );

}
logout(){
  sessionStorage.clear();
  this.r.navigate(['../']);
}


viewquizes(sid: any) {
  var dom=document.getElementById('sublist');
  this.sublisthider(dom);
  this.r.navigate(['uhome/viewquizes'], { queryParams: { sid: sid } });
}
sublisthider(dom){
  dom.style.display="none";
  setTimeout(() => {
    
    dom.style.display="block";
  }, 500);
  
}
history(){
  
  var dom=document.getElementById('sublist2');
  this.sublisthider(dom);
  this.r.navigate(['../uhome/history']);
}
analysis(){
  
  var dom=document.getElementById('sublist2');
  this.sublisthider(dom);
  this.r.navigate(['../uhome/analysis']);
}
update(){
  
  var dom=document.getElementById('sublist3');
  this.sublisthider(dom);
  this.r.navigate(['../uhome/update-profile']);
}
reset(){
  
  var dom=document.getElementById('sublist3');
  this.sublisthider(dom);
  this.r.navigate(['../uhome/reset-password']);
}

}
