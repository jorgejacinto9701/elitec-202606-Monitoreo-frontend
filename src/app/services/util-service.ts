import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Pais } from '../models/pais';
import { Observable } from 'rxjs';
import { Datacatalogo } from '../models/datacatalogo';


@Injectable({
  providedIn: 'root',
})
export class UtilService {

    
   constructor(private http: HttpClient){}

   listaPaises(): Observable<Pais[]> { 
        return this.http.get<Pais[]>('http://localhost:8091/api/util/listaPais');
   }

   listaGrados(): Observable<Datacatalogo[]> {
        return this.http.get<Datacatalogo[]>('http://localhost:8091/api/util/listaGradoAutor');
   }

}
