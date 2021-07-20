import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  refForm:FormGroup;

  constructor(private _formBuilder:FormBuilder, private serviceService: ServiceService, private _router: Router) { }

  ngOnInit(): void {
    this.refForm = this._formBuilder.group({
      refer : ['', Validators.required]
    })
  }

  cancelar() {
    
  }

}
