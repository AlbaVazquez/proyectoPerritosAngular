import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DogService } from './services/dog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private dogService = inject(DogService);

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
    this.dogService.getImagesByBreed(this.razaSeleccionada).subscribe((response) => {
      this.fotosPerros = response.message;
    });
  }
  
}
