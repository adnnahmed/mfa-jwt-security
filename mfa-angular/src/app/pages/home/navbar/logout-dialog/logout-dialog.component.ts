import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  standalone: false,
  
  templateUrl: './logout-dialog.component.html',
  styleUrl: './logout-dialog.component.css'
})
export class LogoutDialogComponent {

  constructor(public dialogRef: MatDialogRef<LogoutDialogComponent>) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    // Call the logout functionality here, e.g., clearing tokens, redirecting, etc.
    console.log('Logged out');
    this.dialogRef.close();
  }
}
