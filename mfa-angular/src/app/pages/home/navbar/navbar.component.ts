import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { Route, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService
  ) {}

  isAdminOrManager(): boolean {
    return this.userService.hasRole('ADMIN') || this.userService.hasRole('MANAGER');
  }

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'logout') {
        this.logout();
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token'); // Clear token from local storage
        this.router.navigate(['/login']); // Navigate to login page after logout
      },
      error: (err) => {
        console.error('Error logging out:', err);
        // You might want to show a toast message or alert here
      }
    });
  }
}
