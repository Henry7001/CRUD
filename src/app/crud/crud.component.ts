import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ModificarComponent } from '../modificar/modificar.component';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'direccion', 'edad', 'acciones'];
  nuevoCliente:any;
  nav: any;
  busqueda = new FormControl('');
  buscar() {
    this.dataSource.filter = this.busqueda.value?.trim().toLowerCase();
  }

  data = [{
    cedula: '0999999991',      
    nombres: 'Wilson Rodrigo',
    apellidos: 'Gilces Tutiven',
    direccion: 'Guayaquil, Ecuador',
    edad: 21
  },
  {
    cedula: '0999999992',      
    nombres: 'Henry Miguel',
    apellidos: 'Ruiz Reyes',
    direccion: 'Daule, Ecuador',
    edad: 21
  },
  {
    cedula: '0999999993',      
    nombres: 'Ricardo Omar',
    apellidos: 'Solorzano Zambrano',
    direccion: 'Guayaquil, Ecuador',
    edad: 21
  },
  {
    cedula: '0999999994',      
    nombres: 'Fausto Javier',
    apellidos: 'Torres Aspiazu',
    direccion: 'Caluma, Ecuador',
    edad: 21
  },
  {
    cedula: '0999999995',      
    nombres: 'Guillermo David',
    apellidos: 'Zevallos Escalante',
    direccion: 'Guayaquil, Ecuador',
    edad: 21
  }
    ];

  constructor(private router: Router, private dialog:MatDialog) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;

    if (this.nuevoCliente != null)
    {      
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }

  openDialogModificar(cedula:string, nombres:string, apellidos:string, direccion:string, edad:number) {
    // Crea una copia del objeto original utilizando Object.assign()
    let objetoModificar = Object.assign({}, { cedula: cedula, nombres: nombres, apellidos: apellidos, direccion: direccion, edad: edad });
  
    // Abre el componente ModificarComponent y envía la copia del objeto como parámetro
    const dialogRef = this.dialog.open(ModificarComponent, {
      width: '50%',
      data: objetoModificar
    });
  }

}
