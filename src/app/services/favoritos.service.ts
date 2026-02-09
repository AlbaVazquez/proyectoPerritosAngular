import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private key = 'misPerrosFavoritos'; // La clave para guardar en el navegador

  // Obtener la lista guardada
  getFavoritos(): string[] {
    const guardados = localStorage.getItem(this.key);
    return guardados ? JSON.parse(guardados) : [];
  }

  // Añadir un perro
  addFavorito(url: string) {
    const actuales = this.getFavoritos();
    if (!actuales.includes(url)) { // Evitamos duplicados
      actuales.push(url);
      localStorage.setItem(this.key, JSON.stringify(actuales));
    }
  }

  // Borrar un perro
  removeFavorito(url: string) {
    let actuales = this.getFavoritos();
    actuales = actuales.filter(item => item !== url); // Filtramos para quitar el que no queremos
    localStorage.setItem(this.key, JSON.stringify(actuales));
  }

  // Comprobar si ya es favorito (para pintar el corazón rojo o vacío)
  isFavorito(url: string): boolean {
    const actuales = this.getFavoritos();
    return actuales.includes(url);
  }
}