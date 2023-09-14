import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewApplicationsComponent } from './components/allowance-application/view-applications/view-applications.component';
import { AddApplicationComponent } from './components/allowance-application/add-application/add-application.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditApplicationComponent } from './components/allowance-application/edit-application/edit-application.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent,
    data: { noLayout: true }, 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'view-applications',
    component: ViewApplicationsComponent
  },
  {
    path: 'add-application',
    component: AddApplicationComponent
  },
  {
    path: 'update/:id', component: EditApplicationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
