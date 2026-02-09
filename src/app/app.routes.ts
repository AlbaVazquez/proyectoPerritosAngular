import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'buscador', component: BuscadorComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];