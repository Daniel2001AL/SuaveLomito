import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  refForm:FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.refForm = this._formBuilder.group({
      refer : ['', Validators.required]
    })
  }

}
