import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './userhome/dashboard/dashboard.component';
import { ViewquizesComponent } from './userhome/viewquizes/viewquizes.component';
import { QstarterComponent } from './userhome/qstarter/qstarter.component';
import { QuizComponent } from './userhome/quiz/quiz.component';
import { ResultComponent } from './userhome/result/result.component';
import { HistoryComponent } from './userhome/history/history.component';
import { AnalysisComponent } from './userhome/analysis/analysis.component';
import { ResetPComponent } from './userhome/reset-p/reset-p.component';
import { UpdatePComponent } from './userhome/update-p/update-p.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'uhome',component:UserhomeComponent,
children:[
  {path:'',component:DashboardComponent,pathMatch:"full"},
  {path:'dashboard',component:DashboardComponent},
  {path:'viewquizes',component:ViewquizesComponent},
  {path:'start-quiz',component:QstarterComponent},
  {path:'quiz',component:QuizComponent},
  {path:'result',component:ResultComponent},
  {path:'history',component:HistoryComponent},
  {path:'analysis',component:AnalysisComponent},
  {path:'reset-password',component:ResetPComponent},
  {path:'update-profile',component:UpdatePComponent},
  

]},
  {path:'adminlogin',component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
