import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteInterface } from '../interfaces/ClienteInterface';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<ModificarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  usuario: FormGroup = new FormGroup({
    cedula: new FormControl(``, [Validators.required]),
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {

    this.usuario.get('cedula')?.setValue(this.data.element.cedula)
    this.usuario.get('nombres')?.setValue(this.data.element.nombres)
    this.usuario.get('apellidos')?.setValue(this.data.element.apellidos)
    this.usuario.get('direccion')?.setValue(this.data.element.direccion)
    this.usuario.get('edad')?.setValue(this.data.element.edad)

  }

  onSubmit() {
  }

  openDialogModificar(element: any) {

  }

  cancelar() {
    this.dialogRef.close();
  }
}
