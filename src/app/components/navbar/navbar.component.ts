import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 
@ViewChild('Prueba') prueba:any
  

abriModal(){
  this.prueba.showModal = true;
}
}
