import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPeruComponent } from './inicio-peru/inicio-peru.component';
import { InicioPeruComponent } from './inicioPeru/inicioPeru.component';
import { InicioMexicoComponent } from './inicioMexico/inicioMexico.component';
import { BlogFinalComponent } from './blogFinal/blogFinal.component';
import { CarruselFinComponent } from './carruselFin/carruselFin.component';
import { ContenedorTitleComponent } from './contenedorTitle/contenedorTitle.component';
import { ProgramaIndividualComponent } from './programaIndividual/programaIndividual.component';
import { ProgramaGrupalComponent } from './programaGrupal/programaGrupal.component';
import { ApoyoEmpresasComponent } from './apoyoEmpresas/apoyoEmpresas.component';

@NgModule({
  declarations: [								
    AppComponent,
    InicioPeruComponent,
      InicioPeruComponent,
      InicioMexicoComponent,
      BlogFinalComponent,
      CarruselFinComponent,
      ContenedorTitleComponent,
      ProgramaIndividualComponent,
      ProgramaGrupalComponent,
      ApoyoEmpresasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
