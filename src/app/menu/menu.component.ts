// Importa la librería para el diálogo de Angular Material
import {MatDialog} from '@angular/material/dialog';

// Importa la librería para el enrutador de Angular
import { Router } from '@angular/router';

// Importa la librería de componente de Angular
import { Component } from '@angular/core';

// Importa el componente de inicio de sesión
import { LoginComponent } from '../login/login.component';

// Decorador que indica que este archivo es un componente de Angular
@Component({
selector: 'app-menu', // Nombre del componente para ser usado en HTML
templateUrl: './menu.component.html', // Ubicación del archivo HTML para este componente
styleUrls: ['./menu.component.css'] // Ubicación del archivo CSS para este componente
})

// Clase principal del componente
export class MenuComponent {
  // Variables de usuario y contraseña
  username: string = '';
  password: string = '';
  
  // Variable de estado de inicio de sesión
  isLoggedIn: boolean = false;
  
  // Constructor que inyecta las dependencias del enrutador y del diálogo
  constructor(
  private router: Router, // Inyecta la dependencia del enrutador
  public dialog: MatDialog // Inyecta la dependencia del diálogo
  ) {}

  // Función que abre un diálogo de inicio de sesión
    openDialogSignIn(){
    // Crea una instancia del diálogo y le pasa el componente de inicio de sesión y la variable de usuario
    const dialogRef = this.dialog.open(
    LoginComponent, {
    data: { username: this.username},
    });
    // Se suscribe a los eventos después de cerrar el diálogo
    dialogRef.afterClosed().subscribe(result => {
      
      // Asigna el resultado (el nombre de usuario) a la variable de usuario
      this.username = result;

      // Si hay un nombre de usuario, establece la variable de inicio de sesión en verdadero
      if (this.username) {
        this.isLoggedIn = true;
      }
      // Si no hay un nombre de usuario, establece la variable de inicio de sesión en falso
      else{
        this.isLoggedIn = false;
      }
    }
    );
  }

  // Función que cierra la sesión y navega a la página principal
    openDialogLogout(){
      // Establece la variable de usuario en vacía
      this.username= '';
      // Establece la variable de inicio de sesión en falso
      this.isLoggedIn = false;
      // Navega a la página principal
      this.router.navigate(['/']);

  }
}