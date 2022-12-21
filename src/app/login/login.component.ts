import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
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
  //variable Error
  

  constructor(private router: Router, private dialogRef:
    MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  submit() {
    //loguearse con los datos de usuario Henry7001 y contraseña 06051950
    if (this.session.value.username == 'Henry7001' && this.session.value.password == '06051950') {
      this.dialogRef.close();
      this.router.navigate(['/crud']);
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }
}
