import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { LogoutDialogComponent } from './pages/home/navbar/logout-dialog/logout-dialog.component';
import { CreateEmployeeComponent } from './pages/home/navbar/features/create-employee/create-employee.component';
import { EmployeeListComponent } from './pages/home/navbar/features/employee-list/employee-list.component';
import { DashboardComponent } from './pages/home/navbar/features/dashboard/dashboard.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';

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
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    AuthenticationService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
