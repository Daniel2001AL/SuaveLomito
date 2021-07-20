import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class ServiceService {
    private REST_API_SERVER = "https://suavelomito.herokuapp.com/";

    constructor(private router: Router, private httpclient: HttpClient) { }

    getReservacion(nombreCliente: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
        };
        return this.httpclient.get(`${this.REST_API_SERVER}reservaciones/${nombreCliente}`,httpOptions);
    }

    addReservacion(nombreCliente: string, nombreHabitacion: string, fechaEntrada: string, horaEntrada: string, horaSalida: string,): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post(`${this.REST_API_SERVER}reservaciones/`, { nombreCliente, nombreHabitacion, fechaEntrada, horaEntrada, horaSalida },httpOptions);
    }

    deleteReservacion(nombreCliente: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
        };
        return this.httpclient.delete(`${this.REST_API_SERVER}reservaciones/${nombreCliente}`,httpOptions);
    }
}