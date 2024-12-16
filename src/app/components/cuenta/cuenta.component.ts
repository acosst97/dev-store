import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CuentasService } from '../../services/cuentas.service';
import { Cliente } from '../../interfaces/Cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss'
})
export class CuentaComponent {

  usercreate:boolean = false;
  nuevoUsuario: Cliente = {idCliente: 0, nombre: '', apellido: '', correo: '', telefono: '' };
  constructor(private cuentasService: CuentasService) { }
  
  agregarUsuario() {
    
    this.cuentasService.createUser(this.nuevoUsuario).subscribe(() => {
  
      console.log('Usuario creado exitosamente', this.nuevoUsuario);
      this.usercreate = true
  
    });
  }
 

}
