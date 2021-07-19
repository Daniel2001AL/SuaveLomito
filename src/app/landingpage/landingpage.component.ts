import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit(): void {
  }

  click(){
    this.router.navigate(['reservacion'])
  }
  clickCan(){
    this.router.navigate(['cancel'])
  }

}
