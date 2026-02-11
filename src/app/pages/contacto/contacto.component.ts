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
    // 1. Aquí SOLO inicializamos el formulario
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  // 2. Creamos la función que se ejecuta al hacer SUBMIT
  enviarFormulario() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      fetch("https://formspree.io/f/mgolopeb", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          this.mensajeEnviado = true;
          this.contactForm.reset();
          
          // Opcional: ocultar el mensaje de éxito después de 5 segundos
          setTimeout(() => this.mensajeEnviado = false, 5000);
        } else {
          alert("Hubo un error al enviar el formulario.");
        }
      }).catch(error => {
        console.error("Error:", error);
      });
    }
  }
}