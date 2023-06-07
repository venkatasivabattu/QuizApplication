import { Component, OnInit } from '@angular/core';
import { UhomeService } from 'src/services/uhome.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private uhs:UhomeService) { }

  ngOnInit() {
    this.subloader();
    this.getUserDetails();
  }
  subjects;
  user;
  subloader(){
    this.uhs.subjectLoader().subscribe(
      (res)=>{
        this.subjects=res.result;
        console.log(res);
      },
      (err)=>{
        alert("Something went wrong while fetching subjects");
        console.log(err);
      }
    );
  
  }
  getUserDetails(){
    this.uhs.getUserDetails().subscribe(
      (res)=>{
        this.user=res.result[0];
        console.log(this.user);
      },
      (err)=>{
        alert("Something went wrong while fetching user details");
        console.log(err);
      }
    );

  }

}
