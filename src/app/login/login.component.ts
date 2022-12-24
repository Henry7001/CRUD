import { Component } from '@angular/core';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  session = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private router: Router, private dialogRef:
    MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar) { }

  alert: boolean = false;

  submit() {
    if (this.session.value.username === "Henry" && this.session.value.password === "123") {
      this.router.navigate(['/crud']);
      this.data.username = this.session.value.username;
      this.dialogRef.close(this.data.username);
    }
    else {
      this.dialogRef.close(null);
      this._snackBar.open('Invalid username or password', 'Close');
    }
  }
}
