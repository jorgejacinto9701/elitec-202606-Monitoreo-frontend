import { DecimalPipe } from "@angular/common";
import { Categoria } from "./categoria";

export interface Producto {

    idProducto: number;
    nombre: string;
    precio: DecimalPipe;
    stock: number;
    categoria: Categoria;
    
}
