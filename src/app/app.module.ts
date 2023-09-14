import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AddApplicationComponent } from './components/allowance-application/add-application/add-application.component';
import { ViewApplicationsComponent } from './components/allowance-application/view-applications/view-applications.component';
import { EditApplicationComponent } from './components/allowance-application/edit-application/edit-application.component';
import { StudentDetailsComponent } from './components/allowance-application/student-details/student-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    AddApplicationComponent,
    ViewApplicationsComponent,
    EditApplicationComponent,
    StudentDetailsComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
