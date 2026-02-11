import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Importante para leer la URL y volver atrás

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  private route = inject(ActivatedRoute);

  // Variables para guardar los datos
  imagen: string = '';
  raza: string = '';
  
  // Datos simulados (nos los inventamos para que quede bonito)
  nombre: string = '';
  edad: number = 0;
  descripcion: string = '';

  ngOnInit() {
    // Leemos los parámetros de la URL (lo que viene después del ?)
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

    // Elegimos uno al azar
    this.nombre = nombres[Math.floor(Math.random() * nombres.length)];
    this.edad = Math.floor(Math.random() * 12) + 1; // Edad entre 1 y 12 años
    this.descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
  }
}