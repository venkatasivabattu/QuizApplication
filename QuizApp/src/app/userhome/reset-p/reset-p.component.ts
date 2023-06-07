import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-reset-p',
  templateUrl: './reset-p.component.html',
  styleUrls: ['./reset-p.component.css']
})
export class ResetPComponent implements OnInit {

  constructor(private ls:LoginService) { }

  ngOnInit() {
  }
  reset(f){
    if(f.pw==''||f.pw==null){
      alert("Please enter the Old Password");
    }
    else{
    var d={};
    d['uname']=sessionStorage.getItem('uname');
    d['pw']=f.pw;
      this.ls.authorize(d).subscribe(
        (res)=>{
          if(res.valid){
            if(f.npw.length<=7){
              alert("Password must have atleast 8 Characters");
            }
            else{
              if(f.npw!=f.cpw){
                alert("Passwords are not Matching");
              }
              else{
                var e={};
                e['uname']=sessionStorage.getItem('uname');
                e['pw']=f.npw;
                this.ls.resetP(e).subscribe(
                  (res)=>{
                    if(res.result){
                      alert("Successfully Updated the Password");
                    }
                    else{
                      alert("cant Reset the Password");
                      console.log(res);
                    }

                  },(err)=>{
                    alert("cant Reset the Password");
                    console.log(err);
                  }
                );
              }
            }
            

          }
          else{
            alert("You have Entered the Invalid Old Password");
          }
        }
      );
    }
  }

}
