import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Revista } from '../models/revista';

@Injectable({
  providedIn: 'root',
})
export class RevistaService {

   constructor(private http: HttpClient){}


     listaRevista(): Observable<Revista[]>{
       return this.http.get<Revista[]>('http://localhost:8091/api/revistas')
     }

     
}
