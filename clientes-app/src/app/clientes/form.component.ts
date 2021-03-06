import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Region } from './region';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal  from 'sweetalert2';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  private title: string = "Crear cliente";
  regiones: Region[];

  private errores: string[];

  constructor(private clienteService: ClienteService,
  private router: Router,
  private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
    this.clienteService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }

  create(): void{
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente creado', `El cliente ${cliente.nombre} ha sido creado con éxito!`, 'success')//opción 1 de mostrar los datos
      }, 
      err => {
        this.errores = err.error.errors as string[];
      }
      );
  }

  cargarCliente(): void{
    this.activateRoute.params.subscribe(params => {
      let id=params[`id`]
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  update(): void{
    console.log(this.cliente); 
    this.clienteService.update(this.cliente).subscribe(
      json => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success')//opción 2 de mostrar el resultado en el swal
      }, 
      err => {
        this.errores = err.error.errors as string[];//Recibe el error de validación del backend
      }
      )
  }

  compararRegion(o1: Region, o2: Region): boolean{
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined? false: o1.id === o2.id
  }
  

}
