import { Component, inject } from '@angular/core';
import { MercaderiaService } from '../../services/mercaderia-service';
import { Observable } from 'rxjs';
import { Mercaderia } from '../../models/mercaderia';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  imports: [  CommonModule,
    ReactiveFormsModule],
  selector: 'app-lista-mercaderia-detalle',
  styleUrl: './lista-mercaderia-detalle.css',
  templateUrl: './lista-mercaderia-detalle.html',
})
export class ListaMercaderiaDetalle {


   private readonly mercaderiaService = inject(MercaderiaService);

   mercaderiaAux!: Observable<Mercaderia>;

  constructor(private route: ActivatedRoute,   private router: Router) {
      
  }

  ngOnInit(): void {
    console.log("==> ngOnInit ");
    const id = this.route.snapshot.paramMap.get('id');
    this.mercaderiaAux = this.mercaderiaService.verDetalle(id!);
  }

  volver() {
    this.router.navigate(['/listaMercaderia']);
  }
}
