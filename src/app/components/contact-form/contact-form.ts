import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;
  submitSuccess = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      this.submitSuccess = true;
      console.log('Formulario enviado:', this.formData);
      
      setTimeout(() => {
        this.submitted = false;
        this.submitSuccess = false;
        this.resetForm();
      }, 3000);
    } else {
      alert('Por favor completa todos los campos');
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
