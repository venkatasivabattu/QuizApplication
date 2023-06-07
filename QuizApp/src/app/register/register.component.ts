import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private r:Router,private ls:LoginService) { }

  ngOnInit() {
    if(sessionStorage.getItem('uname')!=null){
      console.log('go home');
      this.r.navigate(['/uhome']);
    }
  }
  register(f){
    console.log(f);
    var n=f.name;
    var d=new Date(f.dob);
    var g=f.gender;
    var s=f.edu;
    var a=f.address;
    var m=f.mobile;
    var e=f.email;
    var u=f.uname;
    var pw=f.pw;
    var cpw=f.cpw;
    if(n.length==0){
      alert("Please Enter a Valid Name");
      
    }
    else{
      var dy=d.getFullYear();
      var cd=new Date().getFullYear();
      if(cd-dy<5){
        alert("Please Enter a Valid Date of Birth");
      }else{
        
          if(u.length<8){
            alert("Username should be of atleast 8 characters");
          }
          else{
            this.ls.checkUname(u).subscribe(
              
              (res)=>{
                if(res.result){
                  alert("Username Already Exists,Kindly Use Another one");
                }
                else{
                  if(pw!=cpw){
                    alert("Passwords are not matching...");
                  }
                  else{
                    if(pw.length<8){
                      alert("Password should be of atleast 8 characters");
                    }
                    else{
                        const data={};
                        data['name']=n;
                        data['dob']=d;
                        data['gender']=g;
                        data['education']=s;
                        data['address']=a;
                        data['mobile']=m;
                        data['email']=e;
                        data['uname']=u;
                        data['pw']=pw;
                        console.log(data);
                        this.ls.register(data).subscribe(
                          (res)=>{
                            if(res.result){
                              alert("Account Created Successfully...");
                              this.r.navigate(['../']);
                            }
                            else{
                              alert("Please Enter Valid Details");
                            }
                          },
                          (err)=>{
                            
                            alert("Something went Wrong")
                            console.log(err);
                          }
                          
                        );
                      }
                }
                }

              },
              (err)=>{
                console.log(err);
                alert("Something Went Wrong...");
                
              }
            );

          }
        }

      }

    }
  }


