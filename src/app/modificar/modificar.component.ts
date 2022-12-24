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
    this.form.patchValue({
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

  submit(cedula:FormControl, nombres:FormControl, apellidos:FormControl, direccion:FormControl, edad:FormControl){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cedula": cedula,
        "nombres": nombres,
        "apellidos": apellidos,
        "direccion": direccion,
        "edad": edad
      },
      skipLocationChange: false,
      fragment: 'top',
      state: { datosCliente: this.data }
    };
    console.log(navigationExtras);
    this.dialogRef.close(); 
    this.redirectTo('/crud', navigationExtras);
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
