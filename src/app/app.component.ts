import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface FormData {
  cedula: string;
  password: string;
  nombre: string;
  email: string;
  telefono: string[];
  ciudad: string;
  foto: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  formData: FormData = {
    cedula: '',
    password: '',
    nombre: '',
    email: '',
    telefono: [],
    ciudad: '',
    foto: '',
  };

  registrationMessage: string = ''; // Variable para mostrar el mensaje de registro

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Realiza la petición HTTP POST a la ruta de registro
    this.http.post('http://localhost:8080/auth/registro', this.formData).subscribe(
      (response) => {
        this.registrationMessage = 'Registro exitoso'; // Mostrar mensaje de éxito
        // Recargar la página después de un breve retraso (puedes ajustar el tiempo)
        setTimeout(() => {
          window.location.href = window.location.href; // Recargar la página actual
        }, 2000); // 2000 milisegundos (2 segundos)
      },
      (error) => {
        this.registrationMessage = 'Error en el registro'; // Mostrar mensaje de error
        // Maneja el error de acuerdo a tus necesidades.
      }
    );
  }
}
