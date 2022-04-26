import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPeruComponent } from './inicioPeru/inicioPeru.component';
import { PreguntasFiltroFinalComponent } from './preguntasFiltroFinal/preguntasFiltroFinal.component';

const routes: Routes = [
  {
    path:'',
    component: InicioPeruComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
