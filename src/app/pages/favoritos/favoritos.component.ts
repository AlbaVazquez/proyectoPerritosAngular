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

  listaFavoritos: string[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.listaFavoritos = this.favoritosService.getFavoritos();
  }

  eliminar(foto: string) {
    this.favoritosService.removeFavorito(foto);
    this.cargarFavoritos();
  }
}