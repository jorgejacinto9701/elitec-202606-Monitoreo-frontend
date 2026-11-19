import { Routes } from '@angular/router';
import { ListaRevistaMaterial } from './components/lista-revista-material/lista-revista-material';
import { ListaProducto } from './components/lista-producto/lista-producto';
import { ListaMercaderia } from './components/lista-mercaderia/lista-mercaderia';
import { ListaMercaderiaDetalle } from './components/lista-mercaderia-detalle/lista-mercaderia-detalle';

export const routes: Routes = [

    // Lista de revista
    { path: 'listaRevista', component: ListaRevistaMaterial },

    // Lista de productos
    { path: 'listaProducto', component: ListaProducto },

    // Lista de mercaderias
    { path: 'listaMercaderia', component: ListaMercaderia },
    { path: 'detalleMercaderia/:id', component: ListaMercaderiaDetalle },
];