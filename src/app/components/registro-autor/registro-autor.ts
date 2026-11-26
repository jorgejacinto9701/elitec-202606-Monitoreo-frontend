import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutorService } from '../../services/autor-service';
import { Pais } from '../../models/pais';
import { Datacatalogo } from '../../models/datacatalogo';
import { UtilService } from '../../services/util-service';
import { Autor } from '../../models/autor';
import Swal from 'sweetalert2';

/** Tipado de cada control del formulario */
interface AutorFormControls {
  nombres: FormControl<string>;
  apellidos: FormControl<string>;
  fechaNacimiento: FormControl<Date | null>;
  telefono: FormControl<string>;
  pais: FormControl<string>;
  grado: FormControl<string>;
}

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  selector: 'app-registro-autor',
  styleUrl: './registro-autor.css',
  templateUrl: './registro-autor.html',
})
export class RegistroAutor implements OnInit {


  //El formulario de registro de autor
  forms!: FormGroup<AutorFormControls>;

  //Inyección de dependencias de los servicios
  private autorService = inject(AutorService);
  private utilService = inject(UtilService);

  //declara la lista de paises y grados
  lstPaises: any[] = [];
  lstGrados: any[] = [];

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() : void {

    // Inicializa el formulario con los controles y sus validaciones
    this.forms = new FormGroup<AutorFormControls>({
        nombres: new FormControl('', { nonNullable: true }),
        apellidos: new FormControl('', { nonNullable: true }),
        fechaNacimiento: new FormControl(null),
        telefono: new FormControl('', { nonNullable: true }),
        pais: new FormControl('', { nonNullable: true }),
        grado: new FormControl('', { nonNullable: true }),
    });

    // Carga la lista de paises y grados desde el servicio
    this.utilService.listaPaises().subscribe((data: Pais[]) => {
        this.lstPaises = data;
    });
    
    this.utilService.listaGrados().subscribe((data: Datacatalogo[]) => {
        this.lstGrados = data;
    });


  }


  registrar() {

    const raw = this.forms.getRawValue();
    const datos: Autor = {
      nombres: raw.nombres.trim(),
      apellidos: raw.apellidos.trim(),
      fechaNacimiento: raw.fechaNacimiento || new Date(),
      telefono: raw.telefono.trim(),
      pais: { idPais: parseInt(raw.pais), iso: '', nombre: '' },
      grado: { idDataCatalogo: parseInt(raw.grado), descripcion: '' },
      idAutor: 0,
      estado: 1
    };

    this.autorService.insertarAutor(datos).subscribe(
    {
      next: (response: any) => {
        Swal.fire({
          title: 'UPC : Mensajes',
          text: response?.mensaje ?? 'Usuario registrado correctamente',
          icon: 'info',
        });
        this.forms.reset();
      },
      error: (err: any) => {
        Swal.fire({
          title: 'UPC : Mensajes',
          text: err?.error?.mensaje ?? 'No se pudo registrar el usuario',
          icon: 'error',
        });
      },
    }
    );
  }

}
