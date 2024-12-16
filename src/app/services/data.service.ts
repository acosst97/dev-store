import { Usuario } from './../interfaces/Usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   UsuarioLogin = 'harvin.acosta'
   usaurioLogin2 = 'nicolas.vega'
  
   password= 'contra123*'

  constructor() { }
}
