import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; // For the modal
import { MatIconModule } from '@angular/material/icon'; // For icons (optional)
import { MatMenuModule } from '@angular/material/menu'; // For the dropdown (optional)
import { MatSidenavModule } from '@angular/material/sidenav'; // For side navigation (optional)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { LogoutDialogComponent } from './pages/home/navbar/logout-dialog/logout-dialog.component';
import { CreateEmployeeComponent } from './pages/home/navbar/features/create-employee/create-employee.component';
import { EmployeeListComponent } from './pages/home/navbar/features/employee-list/employee-list.component';
import { DashboardComponent } from './pages/home/navbar/features/dashboard/dashboard.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    HomeComponent,
    LogoutDialogComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
