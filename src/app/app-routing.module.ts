import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {ReserveComponent} from './reserve/reserve.component'

const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path:'reservacion', component: ReserveComponent},
    {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }