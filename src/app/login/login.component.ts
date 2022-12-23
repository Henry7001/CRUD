import { Component } from '@angular/core';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  alert: boolean = false;
  submit() {
    if (this.session.value.username=="Henry" && this.session.value.password=="123")
    {      
      this.router.navigate(['/crud']);
      this.data.username = this.session.value.username;
      this.dialogRef.close(this.data.username); 
      this.alert = false;
    }
    else
    {
      this.alert = true;      
      setTimeout(() => this.alert=false, 10000);
    }
  }
}
