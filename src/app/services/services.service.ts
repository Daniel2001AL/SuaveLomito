import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // private api:'https://suavelomito.herokuapp.com/'

  constructor(private http:HttpClient) { }

  reserva( name: String, tipe:String, date:Date, timer:Date, timeb:Date, price:String ): Observable<any>{

    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post(`https://suave-lomito.herokuapp.com/doreserve`, {name, tipe, date, timer, timeb, price},httpOptions);
  }

  getReserva(namer: string){

    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.get(`https://suave-lomito.herokuapp.com/reserva/${namer}`,httpOptions);
    }
  delete(namer: string){

    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.delete(`https://suave-lomito.herokuapp.com/delete/${namer}`,httpOptions);
    }
    
}
