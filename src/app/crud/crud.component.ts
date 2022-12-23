import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ModificarComponent } from '../modificar/modificar.component';
import { ClienteInterface } from '../interfaces/ClienteInterface';
import { CdkFixedSizeVirtualScroll } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'direccion', 'edad', 'acciones'];
  
  data = [{
        cedula: '0151245245',      
        nombres: 'Andrés Luis',
        apellidos: 'Carvajal Lozano',
        direccion: 'Quito, Ecuador',
        edad: 50
      },
      {
        cedula: '0929992823',      
        nombres: 'Henry Miguel',
        apellidos: 'Ruiz Reyes',
        direccion: 'Daule, Ecuador',
        edad: 50
      },
      {
        cedula: '0954658913',      
        nombres: 'Jorge Luis',
        apellidos: 'Charco Aguirre',
        direccion: 'Guayaquil, Ecuador',
        edad: 36
      },
      {
        cedula: '0957962158',      
        nombres: 'Andrea Lisbeth',
        apellidos: 'Romero Haro',
        direccion: 'Guayaquil, Ecuador',
        edad: 45
      }
    ];
  
  nuevoCliente:any;
  nav: any;

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
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }

  //openDialogModificar() con ingreso de cliente
  openDialogModificar(element:any){
    this.dialog.open(ModificarComponent, {
      width: '50%'
    })
  }

}
