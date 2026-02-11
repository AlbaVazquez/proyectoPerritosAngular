import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup;
  mensajeEnviado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: [''], 
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['']
    });
  }

  enviarFormulario() {
    if (this.contactForm.valid) {
      console.log("Datos enviados:", this.contactForm.value);
      this.mensajeEnviado = true;
      this.contactForm.reset();
      
      setTimeout(() => this.mensajeEnviado = false, 3000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}