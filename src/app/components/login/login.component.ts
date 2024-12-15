import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CuentasService } from '../../services/cuentas.service';
import { Cliente } from '../../interfaces/Cliente';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user : string = "correoprueba@email.com";
  Password:  string = "pass123456";
  errorLogin:boolean = false;
  viewLogin :boolean = true;
  currentSection: string = 'portafolio'; 

 
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

   registro(){

   }


   changueView(vie:boolean){
    this.viewLogin = !this.viewLogin;
     }

   //validacion Login
  login() {
    if ( this.user === "correoprueba@email.com" && this.Password === "pass123456") {
      this.router.navigate(['/dashboard']); // Navega a la ruta '/dashboard'
    } else{
     this.errorLogin = true
    }
  }

  constructor(private router: Router,private cuentasService: CuentasService) {}
}
