import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {ReserveComponent} from './reserve/reserve.component'
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path:'reservacion', component: ReserveComponent},
    {path: 'cancel', component: CancelComponent},
    {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }