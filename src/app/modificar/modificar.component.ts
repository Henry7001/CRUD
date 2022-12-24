import { Component, OnInit,Input, Inject, Output } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteInterface } from '../interfaces/ClienteInterface';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
    form: FormGroup = new FormGroup({
    cedula: new FormControl('', [Validators.required]),
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    });
    dataSource: DataSource<ClienteInterface> = new MatTableDataSource();
  
    cedula = new FormControl('', [Validators.required]);
    nombres = new FormControl('', [Validators.required]);
    apellidos = new FormControl('', [Validators.required]);
    direccion = new FormControl('', [Validators.required]);
    edad = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<ModificarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { 
    this.form.setValue({
      cedula: data.cedula,
      nombres: data.nombres,
      apellidos: data.apellidos,
      direccion: data.direccion,
      edad: data.edad
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  submit(form:FormGroup){
    // Obtener la información del formulario
    const cliente: ClienteInterface = {
    cedula: form.value.cedula,
    nombres: form.value.nombres,
    apellidos: form.value.apellidos,
    direccion: form.value.direccion,
    edad: form.value.edad
    }
  
    // Actualizar el elemento en la tabla
    this.dataSource.update(cliente, cliente);

    // Cerrar el diálogo
    this.dialogRef.close(); 

  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
