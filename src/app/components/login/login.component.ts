import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CuentasService } from '../../services/cuentas.service';
import { Cliente } from '../../interfaces/Cliente';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  errorLogin:boolean = false;
  viewLogin :boolean = true;
  currentSection: string = 'portafolio'; 
  
 data = inject(DataService)



   changueView(vie:boolean){
    this.viewLogin = !this.viewLogin;
     }

   //validacion Login
  login() {
    if ( this.data.UsuarioLogin === "harvin.acosta" && this.data.password === "contra123*") {
      this.router.navigate(['/dashboard']); // Navega a la ruta '/dashboard'
    } else{
     this.errorLogin = true
    }
  }


  registro(){}
  //registro nuevo usuario 
usercreate:boolean = false;
nuevoUsuario: Cliente = {idCliente: 0, nombre: '', apellido: '', correo: '', telefono: '' };

agregarUsuario() {
  this.cuentasService.createUser(this.nuevoUsuario).subscribe(() => {
    console.log('Usuario creado exitosamente', this.nuevoUsuario);
    this.usercreate = true
    // Puedes realizar alguna acción adicional después de crear el usuario, como limpiar el formulario o redirigir a otra página
  });
}
//secciones o rutas
showSection(section: string) {
  this.currentSection = section;
}
  constructor(private router: Router,private cuentasService: CuentasService) {}
}
