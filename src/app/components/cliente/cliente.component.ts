import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CuentasService } from '../../services/cuentas.service';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../interfaces/Cliente';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  cliente: Cliente ={idCliente: 0, nombre: '', apellido: '', correo: '', telefono: '' };
  // Inyecta el servicio en el constructor
  constructor(private cuentasService: CuentasService,) {
    this.mostrarData();
   }

  // Propiedad para almacenar los datos de las cuentas
  cuentas$ = this.cuentasService.findUser();

  // Método para mostrar la data (puedes modificar este método según tus necesidades)
  mostrarData() {
    this.cuentas$.subscribe(data => {
      console.log("mis datos cliente", data); // O haz algo con los datos recibidos
    });
  }
  eliminarUsuario(idCliente: number) {
    this.cuentasService.DeleteUser(idCliente).subscribe(() => {
      console.log('Usuario eliminado exitosamente');
      this.mostrarData();
    });
  }

}
