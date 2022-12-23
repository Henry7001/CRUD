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
  username: string = ''; password: string = '';
  isLoggedIn: boolean = false;
  constructor(
    private router: Router,public dialog: MatDialog) {}
  openDialogSignIn(){
    const dialogRef = this.dialog.open(
      LoginComponent, {
      data: { username: this.username},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.username = result;
      if (this.username != undefined) {
        this.router.navigate(['/crud']);
        this.isLoggedIn = true;
      }else{
        this.username = '';
        this.isLoggedIn = false;
      }
    }
    );
  }

  openDialogLogout(){
    this.username= '';
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}