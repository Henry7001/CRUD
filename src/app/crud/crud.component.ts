import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ModificarComponent } from '../modificar/modificar.component';
import { ClienteInterface } from '../interfaces/ClienteInterface';
import { ThisReceiver } from '@angular/compiler';
import { arrayClientes } from '../database/clientes';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['id', 'cedula', 'nombres', 'apellidos', 'direccion', 'edad', 'acciones'];
  nuevoCliente: any;
  nav: any;
  busqueda = new FormControl('');
  buscar() {
    this.dataSource.filter = this.busqueda.value?.trim().toLowerCase();
  }
  newData: any = [];
  data: ClienteInterface[] = arrayClientes;

  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
    if (!this.nuevoCliente) {
      return;
    }
    const { datosCliente } = this.nuevoCliente;
    const cliente = datosCliente.queryParams as ClienteInterface;
    if (cliente.id) {
      let indice = this.data.findIndex((client) => client.id == cliente.id);
      this.data.splice(indice, 1, cliente);
    } else {
      cliente.id = this.data.length + 1;
      this.data.push(cliente);
    }
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  openDialogModificar(id: number, cedula: string, nombres: string, apellidos: string, direccion: string, edad: number) {
    // Crea una copia del objeto original utilizando Object.assign()
    let objetoModificar = { id, cedula, nombres, apellidos, direccion, edad } as ClienteInterface;

    // Abre el componente ModificarComponent y envía la copia del objeto como parámetro
    const dialogRef = this.dialog.open(ModificarComponent, {
      width: '50%',
      data: objetoModificar,
    });
  }

  eliminar(id: number) {
    let indice = this.data.findIndex((cliente) => cliente.id == id);
    this.data.splice(indice, 1);
    this.dataSource = new MatTableDataSource(this.data);
  }

  openDialogAgregar() {
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }


}
