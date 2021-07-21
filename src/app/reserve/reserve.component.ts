import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { ServicesService } from '../services/services.service';

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

  constructor(private _formBuilder:FormBuilder, private services:ServicesService) { }

  ngOnInit(): void {
    this.reservaForm = this._formBuilder.group({
      name : ['', Validators.required],
      tipo :['', Validators.required],
      date : ['', Validators.required],
      timeE: ['', Validators.required],
      timeS: ['', Validators.required]
    })
  }
  reserva(){
    this.resume= true;
    this.confirmed=true;
    const data = this.reservaForm.value;
    const x = parseInt(data.tipo)
    switch(x){
      case 1:
        this.tipe = "Dalmata-Inn";
        this.costo = "$100.00"
        break;
      case 2:
        this.tipe = "Parke"
        this.costo = "$300.00"
        break;
      case 3:
        this.tipe = "Honk-Kong"
        this.costo = "$500.00"
        break;
    }
    this.services.reserva(data.name,this.tipe, data.date, data.timeE, data.timeS, this.costo).subscribe(access=>{
      console.log('ok')
    });
  }
  

}
