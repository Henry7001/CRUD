import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteInterface } from '../interfaces/ClienteInterface';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  dataSource: any = [];
  data: any = [];
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarComponent>) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    //console.log(this.data);
  }

  usuario = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  });

  onSubmit(){
  }

  openDialogModificar(element:any){
    this.usuario.setValue({
      cedula: element.cedula,
      nombres: element.nombres,
      apellidos: element.apellidos,
      direccion: element.direccion,
      edad: element.edad
    });
    console.log("Hola");
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
