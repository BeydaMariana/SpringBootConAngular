import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Region } from './region';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import swal from "sweetalert2";
import { Router } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';
import { AuthService } from '../usuarios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient,  
    private router: Router,
    private authService: AuthService) { }

    /* private agregarAuthorizationHeader(){
      let token = this.authService.token;
      if(token != null){
        return this.httpHeaders.append('Authorization', 'Bearer' + token);
      }
      return this.httpHeaders;
    } */

    private isNoAutorizado(e): boolean{
      if(e.status==401){
        
        if(this.authService.isAuthenticated()){
          this.authService.logout();
        }

        this.router.navigate(['/login']);
        return true;
      }

      if(e.status==403){
        swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso!`, 'warning')
        this.router.navigate(['/clientes']);
        return true;
      }
      return false;
    }

    getRegiones(): Observable<Region[]>{
      return this.http.get<Region[]>(this.urlEndPoint+'/regiones').pipe(
        catchError(e => {
          this.isNoAutorizado(e);
          return throwError(e);
        })
      );
    }

  /* getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      tap(response => {
        let clientes = response as Cliente[];
        clientes.forEach(cliente => {
          console.log(cliente.nombre);
        });
      }),
      map(response => {

        let clientes = response as Cliente[];//aquí se hace en mayusculas el nombre
        return clientes.map( cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          //cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US'); Opción 1
          let datepipe = new DatePipe('es');
          //cliente.createAt = datepipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy'); //Opción 2 de dar formato a la fecha
          return cliente;
        }) //hasta aquí se hace lo de mayuscular
      }),
      tap(response => { //Este es el tap que consulta valores pero sin generar un return
        response.forEach(cliente => {
          console.log(cliente.nombre);
        });
      })
      );
  } */

  getClientes(page: number): Observable<any[]>{
    return this.http.get(this.urlEndPoint+'/page/'+ page).pipe(
      tap((response: any) => {
        (response.content as Cliente[]).forEach(cliente => {
          //console.log(cliente.region);
        });
      }),
      map((response: any) => {
        (response.content as Cliente[]).map( cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          return cliente;
        });
        return response;
      }),
      tap(response => { //Este es el tap que consulta valores pero sin generar un return
        (response.content as Cliente[]).forEach(cliente => {
          //console.log(cliente.nombre);
        });
      })
      );
  }

  create(cliente: Cliente) : Observable<any>{
    return this.http.post<any>(this.urlEndPoint, cliente).pipe(
      map( (response: any) => response.cliente as Cliente), //Esta es la opción 1 para enviar el cliente y el mensaje del backend
      catchError(e => {

        if(this.isNoAutorizado(e)){
          return throwError(e);
        }

        if(e.status==400){
          return throwError(e);
        }

        swal.fire(e.error.mensaje, e.error.error, 'error');// Así es para que muestre más detalle del error
        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {

        if(this.isNoAutorizado(e)){
          return throwError(e);
        }

        this.router.navigate(['/clientes']);
        swal.fire('Error al editar', e.error.mensaje, 'error');   //Manda el error establecido en el backend     
        return throwError(e); //El throwError es para retornar el observable
      })
    );
  }

  update(cliente: Cliente): Observable<any>{ //se pone any para que reconozca el json mandado desde el backend, opción 2
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente).pipe(
      catchError(e => {

        if(this.isNoAutorizado(e)){
          return throwError(e);
        }

        if(e.status==400){
          return throwError(e);//Recibe el error de validación del backend
        }

        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {

        if(this.isNoAutorizado(e)){
          return throwError(e);
        }

        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e); 
      })
    );
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>>{

    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);


    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
        catchError(e => {
          this.isNoAutorizado(e);
          return throwError(e);
        })
      );
  }

}
