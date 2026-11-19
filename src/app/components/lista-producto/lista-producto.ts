import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto-service';

@Component({
  imports: [CommonModule, MatToolbar, MatTableModule],
  selector: 'app-lista-producto',
  styleUrl: './lista-producto.css',
  templateUrl: './lista-producto.html',
})
export class ListaProducto {

  dataSource = new MatTableDataSource<Producto>([]);

    private readonly productoService = inject(ProductoService);

  displayedColumns: string[] = ['idProducto', 'nombre', 'precio', 'stock', 'descripcion'];

    ngOnInit(): void {
        this.productoService.listaProducto().subscribe(
           {
              next: (response:any) => {
                  this.dataSource.data = response;
                  
              }
            }
        );
  
    }
}
