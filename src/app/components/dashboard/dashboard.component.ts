import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { CuentaComponent } from '../cuenta/cuenta.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule,RouterOutlet,RouterLink, ClienteComponent,CuentaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
