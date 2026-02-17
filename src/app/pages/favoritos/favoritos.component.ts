import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favoritos.service'; 

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {

  // Esta es la variable que el HTML intenta leer
  listaFavoritos: string[] = [];

  // Inyectamos el servicio en el constructor
  constructor(private favoritosService: FavoritosService) {}

  // Al iniciar, cargamos los datos del servicio
  ngOnInit() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.listaFavoritos = this.favoritosService.getFavoritos();
  }

  eliminar(foto: string) {
    this.favoritosService.removeFavorito(foto); // Borra del localStorage
    this.cargarFavoritos(); // Actualiza la lista en pantalla
  }
}
