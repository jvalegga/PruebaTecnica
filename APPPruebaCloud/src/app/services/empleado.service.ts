import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private myAppUrl = 'https://localhost:44325/';
  private myApiUrl = 'api/Empleados/'

  constructor(private http: HttpClient) { }

  getListEmpleados(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  saveEmpleado(Empleado: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, Empleado);
  }

  updateEmpleado(id: string, Empleado: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, Empleado);
  }

  deleteEmpleado(id: string): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }


}
