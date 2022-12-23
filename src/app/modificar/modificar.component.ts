import { Component, OnInit,Input } from '@angular/core';
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
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarComponent>) { }
  
  usuario: FormGroup= new FormGroup({
    cedula: new FormControl('',[Validators.required]),
    nombres: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    edad: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }

  onSubmit(){
  }

  openDialogModificar(element:any){
    
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
