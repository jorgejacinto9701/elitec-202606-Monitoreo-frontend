import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Mercaderia } from '../models/mercaderia';

@Injectable({
  providedIn: 'root',
})
export class MercaderiaService {
 constructor(private http: HttpClient){}


     listaMercaderia(): Observable<Mercaderia[]>{
       return this.http.get<Mercaderia[]>('https://fakestoreapi.com/products')
     }

     verDetalle(id: string):Observable<Mercaderia>{
        return this.http.get<Mercaderia>('https://fakestoreapi.com/products/' + id);
    }
}
