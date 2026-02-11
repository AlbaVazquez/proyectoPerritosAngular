import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  private route = inject(ActivatedRoute);

  imagen: string = '';
  raza: string = '';
  
  nombre: string = '';
  edad: number = 0;
  descripcion: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.imagen = params['imagen'];
      this.raza = params['raza'];
      
      this.generarDatosAleatorios();
    });
  }

  generarDatosAleatorios() {
    const nombres = ['Toby', 'Max', 'Luna', 'Bella', 'Rocky', 'Coco', 'Thor', 'Nala'];
    const descripciones = [
      'Le encanta jugar con la pelota y correr por el parque.',
      'Es muy tranquilo y adora dormir en el sofá todo el día.',
      'Un compañero fiel, ideal para familias con niños pequeños.',
      'Muy energético, necesita mucho ejercicio y largos paseos.',
      'Tímido al principio, pero muy cariñoso cuando coge confianza.'
    ];

    this.nombre = nombres[Math.floor(Math.random() * nombres.length)];
    this.edad = Math.floor(Math.random() * 12) + 1;
    this.descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
  }
}