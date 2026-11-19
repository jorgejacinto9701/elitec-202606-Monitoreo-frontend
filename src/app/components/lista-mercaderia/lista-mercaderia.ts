import { Component, inject, OnInit } from '@angular/core';
import { MercaderiaService } from '../../services/mercaderia-service';
import { Mercaderia } from '../../models/mercaderia';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ CommonModule,
             ReactiveFormsModule, 
             RouterLink],
  selector: 'app-lista-mercaderia',
  styleUrl: './lista-mercaderia.css',
  templateUrl: './lista-mercaderia.html',
})
export class ListaMercaderia implements OnInit{

      private readonly mercaderiaService = inject(MercaderiaService);
      lstMercaderia!: Observable<Mercaderia[]>;

      ngOnInit(): void {
          this.lstMercaderia = this.mercaderiaService.listaMercaderia();
      }
}
