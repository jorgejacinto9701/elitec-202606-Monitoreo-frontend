import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Component, inject } from '@angular/core';
import { Revista } from '../../models/revista';
import { RevistaService } from '../../services/revista-service';

@Component({
  imports: [CommonModule, MatToolbar, MatTableModule],
  selector: 'app-lista-revista-material',
  styleUrl: './lista-revista-material.css',
  templateUrl: './lista-revista-material.html',
})
export class ListaRevistaMaterial {
  
  dataSource = new MatTableDataSource<Revista>([]);

    private readonly revistaService = inject(RevistaService);

  displayedColumns: string[] = ['idRevista', 'nombre', 'pais', 'tipoRevista', 'estado', 'fechacreacion'];

    ngOnInit(): void {
        this.revistaService.listaRevista().subscribe(
           {
              next: (response:any) => {
                  this.dataSource.data = response;
                  
              }
            }
        );
  
    }

}
