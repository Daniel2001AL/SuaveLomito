import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  refForm:FormGroup;
  xd : FormGroup;
  namer: string;
  tipe: string;
  date: Date;
  timer: Date;
  timeb: Date;
  price : string;

  constructor(private _formBuilder:FormBuilder, private services:ServicesService) { }

  ngOnInit(): void {
    this.refForm = this._formBuilder.group({
      refer : ['', Validators.required]
    })

  }

  // search():void{
  //   const data = this.refForm.value;
  //   this.namer = data.refer;
  //   this.services.getReserva(this.namer).subscribe((data:JSON)=>{
  //   let registro = data;
  //   this.date = registro['date']
  //   console.log(this.date)
  //   //  this.tipe = registro.stringify['tipe']
  //   //  this.timer = registro['timer']
  //   //  this.timeb = registro['timer']
  //   //  this.price = registro['price']
  //   //  console.log( this.namer,this.tipe, this.date, this.timer, this.timeb, this.price)
  //   });
    
  //}

  delete(){
    const data = this.refForm.value;
    this.namer = data.refer;
    this.services.delete(this.namer).subscribe(access =>{},error=>{console.log("Datos validos")})
  }

}
