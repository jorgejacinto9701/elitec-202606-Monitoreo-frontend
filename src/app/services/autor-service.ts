import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutorService {

     constructor(private http: HttpClient){}

    public insertarAutor(autor: any): Observable<any> {
        return this.http.post('http://localhost:8091/api/autor', autor);
    }

    
}
