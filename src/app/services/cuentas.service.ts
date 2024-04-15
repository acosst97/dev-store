import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private readonly _http = inject(HttpClient);
   usuariosUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) { }

  findUser():Observable<Cliente[]>{
    return this._http.get<Cliente[]>(this.usuariosUrl);
 }
 createUser(cliente: Cliente): Observable<Cliente> {
  return this.http.post<Cliente>(this.usuariosUrl, cliente);
}
DeleteUser(idCliente: number): Observable<Cliente> {
  const url = `${this.usuariosUrl}/${idCliente}`;
  return this.http.delete<Cliente>(url);
}
}
