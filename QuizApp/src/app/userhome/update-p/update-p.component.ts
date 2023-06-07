import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { UhomeService } from 'src/services/uhome.service';
import { FormControl,FormGroup } from '@angular/forms';
import { chownSync } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.component.html',
  styleUrls: ['./update-p.component.css']
})
export class UpdatePComponent implements OnInit {

  constructor(private ls:LoginService,private us:UhomeService,private r:Router) { }
  d;
  fdata;

  ngOnInit() {
    this.getUserInfo();
    
  }
  getUserInfo(){
    this.us.getUserDetails().subscribe(
      (res)=>{
        
        this.d=res.result[0];
        
        this.initiator();
      },
      (err)=>{
        alert("Error While fetching User Details");
      }
    );

  }
  initiator(){
    if(!this.d){
      this.r.navigate(['']);
    }
    const dob = new Date(this.d['dob']).toISOString().substring(0, 10);
    this.fdata=new FormGroup({
      name:new FormControl(this.d['name']),
      dob:new FormControl(dob),
      gender:new FormControl(this.d['gender']),
      education:new FormControl(this.d['education']),
      address:new FormControl(this.d['address']),
      mobile:new FormControl(this.d['mobile']),
      email:new FormControl(this.d['email']),
      uname:new FormControl(this.d['uname']),
      
      
      
    });
  }
  update(f){
    console.log(f.name);




    




    if(f.name.length==0){
      alert("Please Enter a Valid Name");
      
    }
    else{
      var dy=new Date(f.dob).getFullYear();
      var cd=new Date().getFullYear();
      if(cd-dy<5){
        alert("Please Enter a Valid Date of Birth");
      }
      else{
        
        
        if(sessionStorage.getItem('uname')!=f.uname){
          this.ls.checkUname(f.uname).subscribe(
              
            (res)=>{
              if(res.result){
                alert("Username Already Exists,Kindly Use Another one");
                
                
              }
              else{
                if(f.uname.length<=7){
                  alert("Username must be of above 8 characters");
                }
                else{
                  f['ouname']=sessionStorage.getItem('uname');
                  this.updater(f);

                }
                
              }
              

            },
            (err)=>{
              alert("error while checking uname");
              console.log(err);
            });
        }
        else{
          //uname same
          f['ouname']=sessionStorage.getItem('uname');
          this.updater(f);
        }
        
      }
    }

}
updater(f){
  console.log(f);
  this.ls.updateP(f).subscribe(
    (res)=>{
      if(res.result){
        alert("profle Updated Successfully");
        if(f.uname!=sessionStorage.getItem('uname')){
          sessionStorage.setItem('uname',f.uname);
        }
        this.r.navigate([''])
      }
      else{

        alert("something went wrong");
        console.log(res.problem);
        
      }
    },
    (err)=>{
      console.log(err);
    }
  );

}

}
