import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { authGuard } from './services/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { CreateEmployeeComponent } from './pages/home/navbar/features/create-employee/create-employee.component';
import { DashboardComponent } from './pages/home/navbar/features/dashboard/dashboard.component';
import { EmployeeListComponent } from './pages/home/navbar/features/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
