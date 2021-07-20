import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  reservaForm: FormGroup;
  resume = false;
  tipe = "";
  costo = "";
  confirmed = false;

  constructor(private _formBuilder:FormBuilder, private serviceService: ServiceService, private _router: Router) { }

  ngOnInit(): void {
    this.reservaForm = this._formBuilder.group({
      name : ['', Validators.required],
      tipo :['', Validators.required],
      date : ['', Validators.required],
      timeE: ['', Validators.required],
      timeS: ['', Validators.required]
    })
  }

  reserva(nombreCliente,nombreHabitacion,fechaEntrada,horaEntrada,horaSalida){
    this.resume= true;
    this.confirmed=true;
    const data = this.reservaForm.value;
    if (data.tipo == "Dalmata-Inn") {
      this.tipe = "Dalmata-Inn";
      this.costo = "$100.00"
    } else if (data.tipo == "Parke") {
      this.tipe = "Parke"
      this.costo = "$300.00"
    } else {
      this.tipe = "Honk-Kong"
      this.costo = "$500.00"
    }

    this.serviceService.addReservacion(nombreCliente, nombreHabitacion, fechaEntrada, horaEntrada, horaSalida).subscribe(access => {
      console.log("Ta piola")
    }, error => {
      console.log(nombreCliente, nombreHabitacion, fechaEntrada, horaEntrada, horaSalida)
    })
  }

}
