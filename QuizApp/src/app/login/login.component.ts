import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls:LoginService,private r:Router){}

  ngOnInit() {
    
    if(sessionStorage.getItem('uname')!=null){
      console.log('go home');
      this.r.navigate(['/uhome']);
    }
  }
  
  title = 'QuizApp';

  //login function
  login(f){
   var u=f.uname;
   var p=f.pw;
   if(u.length!=0){
    if(p.length==0){
      alert("Please fill all the fields");
    }
    else{
      this.ls.authorize(f).subscribe(
        (res)=>{
          console.log(res);
          if(res.valid==true){
            sessionStorage.setItem('uname',JSON.stringify(u));
            this.r.navigate(['/uhome']);
          }
          else{
            alert("Invalid Username or Password.");

          }

        },
        (err)=>{
          console.log(err);

        }
      );

    }

   }

  }

  

}
