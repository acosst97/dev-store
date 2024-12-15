import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  showModal: boolean = false;
  width: string = '200px';
  height: string = '200px';

  ngOnInit(): void {
    // Puedes inicializar los valores si es necesario
    this.showModal = false; // Inicialización explícita
    this.width = '300px';  // Tamaño predeterminado
    this.height = '200px'; // Tamaño predeterminado
  }

  closeModal() {
    this.showModal = false; // Método para cerrar el modal
  }

}
