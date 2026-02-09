import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  private favoritosService = inject(FavoritosService);
  
  // Obtenemos la lista directamente del servicio
  get listaFavoritos() {
    return this.favoritosService.getFavoritos();
  }

  eliminar(url: string) {
    this.favoritosService.removeFavorito(url);
  }
}