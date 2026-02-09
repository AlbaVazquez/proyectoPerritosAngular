import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. IMPORTANTE: Importar ReactiveFormsModule y validadores
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  // 2. Añadirlo a los imports
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup;
  mensajeEnviado: boolean = false;

  // 3. Inyectamos FormBuilder para crear el formulario fácil
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]], // Obligatorio, mín 3 letras
      email: ['', [Validators.required, Validators.email]],       // Obligatorio, formato email
      mensaje: ['', [Validators.required, Validators.minLength(10)]] // Obligatorio, mín 10 letras
    });
  }

  enviarFormulario() {
    if (this.contactForm.valid) {
      console.log("Datos enviados:", this.contactForm.value);
      this.mensajeEnviado = true;
      this.contactForm.reset(); // Limpiar formulario
      
      // Ocultar el mensaje de éxito a los 3 segundos
      setTimeout(() => this.mensajeEnviado = false, 3000);
    } else {
      this.contactForm.markAllAsTouched(); // Para que salgan los errores rojos si intentan enviar vacío
    }
  }
}