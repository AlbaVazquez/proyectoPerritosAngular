import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dog.ceo/api';

  getBreeds() {
    return this.http.get<any>(`${this.apiUrl}/breeds/list/all`).pipe(
      map(response => Object.keys(response.message))
    );
  }

  getImagesByBreed(breed: string) {
    return this.http.get<any>(`${this.apiUrl}/breed/${breed}/images`)
  }

  constructor() { }
}
