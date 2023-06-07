import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserhomeComponent,
    AdminloginComponent,
    DashboardComponent,
    ViewquizesComponent,
    QstarterComponent,
    QuizComponent,
    ResultComponent,
    HistoryComponent,
    AnalysisComponent,
    ResetPComponent,
    UpdatePComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
