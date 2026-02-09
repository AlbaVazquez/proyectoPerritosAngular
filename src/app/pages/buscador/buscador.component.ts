import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from '../../services/dog.service'; // Fíjate que la ruta cambia un poco al moverlo
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {
  private dogService = inject(DogService);
  public favoritosService = inject(FavoritosService);

  listadoRazas: string[] = [];
  fotosPerros: string[] = [];
  razaSeleccionada: string = '';

  ngOnInit() {
    this.dogService.getBreeds().subscribe((razas) => {
      this.listadoRazas = razas;
    });
  }

  buscarPerros(event: any) {
    this.razaSeleccionada = event.target.value;
    this.dogService.getImagesByBreed(this.razaSeleccionada).subscribe((datos) => {
      this.fotosPerros = datos.message;
    });
  }

  toggleFavorito(url: string) {
    if (this.favoritosService.isFavorito(url)) {
      this.favoritosService.removeFavorito(url);
    } else {
      this.favoritosService.addFavorito(url);
    }
  }
}


