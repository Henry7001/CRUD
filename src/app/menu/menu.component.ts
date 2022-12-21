import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  username: string = '';
  constructor(
    private router: Router,public dialog: MatDialog) {}
  openDialogSignIn(){
    const dialogRef = this.dialog.open(LoginComponent, {
      data: { username: this.username },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/crud']);
      this.username = result;
    });
  }

  openDialogLogout(){
    this.router.navigate(['/']);
    this.username= '';
  }
}