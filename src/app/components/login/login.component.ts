import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user : string = "correoprueba@email.com";
  Password:  string = "pass123456";
  errorLogin:boolean = false;


  login() {
    if ( this.user === "correoprueba@email.com" && this.Password === "pass123456") {
      this.router.navigate(['/dashboard']); // Navega a la ruta '/dashboard'
    } else{
     this.errorLogin = true
    }
  }

  constructor(private router: Router) {}
}
