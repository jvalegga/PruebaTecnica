import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private myAppUrl = 'https://localhost:44325/';
  private myApiUrl = 'api/Entidades/'

  constructor(private http: HttpClient)  { }
  
  getListEntidades(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteEntidad(id: string): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveEntidad(Entidad: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, Entidad);
  }

  updateEntidad(id: string, Entidad: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, Entidad);
  }
}
