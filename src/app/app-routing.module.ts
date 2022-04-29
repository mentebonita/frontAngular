import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFinalComponent } from './blogFinal/blogFinal.component';
import { CrearEspecialistaComponent } from './crearEspecialista/crearEspecialista.component';
import { CrearunaCuentaComponent } from './crearunaCuenta/crearunaCuenta.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { InformacionEspecialistaComponent } from './informacionEspecialista/informacionEspecialista.component';
import { InicioMexicoComponent } from './inicioMexico/inicioMexico.component';
import { InicioPeruComponent } from './inicioPeru/inicioPeru.component';
import { MarketplaceInicioComponent } from './marketplaceInicio/marketplaceInicio.component';
import { PerfilAdministradorComponent } from './perfilAdministrador/perfilAdministrador.component';
import { PerfilEspecialistaComponent } from './perfilEspecialista/perfilEspecialista.component';
import { PlanyHorarioComponent } from './planyHorario/planyHorario.component';
import { PreguntasFiltro6Component } from './preguntasFiltro6/preguntasFiltro6.component';
import { PreguntasFiltroFinalComponent } from './preguntasFiltroFinal/preguntasFiltroFinal.component';
import { ProgramaGrupalMexicoComponent } from './programaGrupalMexico/programaGrupalMexico.component';
import { ProgramaGrupalPeruComponent } from './programaGrupalPeru/programaGrupalPeru.component';
import { ProgramaIndividualMexicoComponent } from './programaIndividualMexico/programaIndividualMexico.component';
import { ProgramaIndividualPeruComponent } from './programaIndividualPeru/programaIndividualPeru.component';
import { TipoSesionesComponent } from './tipoSesiones/tipoSesiones.component';
import { UsuarioInformesComponent } from './usuarioInformes/usuarioInformes.component';

const routes: Routes = [

  {path:'',component:InicioPeruComponent},
  {path:'mexico',component:InicioMexicoComponent},
  {path:'tipo-sesiones', component:TipoSesionesComponent},
  {path:'individual-mexico', component:ProgramaIndividualMexicoComponent},
  {path:'grupal-peru', component:ProgramaGrupalPeruComponent},
  {path:'grupal-mexico', component:ProgramaGrupalMexicoComponent},
  //{path:'precios-peru', component:},
  //{path:'precios-mexico', component:},
  //{path:'lista-especialista', component:}
  //{path:'ver-preciope', component:}
  //{path:'ver-preciome', component:}
  {path:'ver-perfiluser', component:UsuarioInformesComponent},
  {path:'ver-perfiladmin', component:PerfilAdministradorComponent},
  {path:'ver-perfilespeci',component: PerfilEspecialistaComponent},
  {path:'crear-especialista', component:CrearEspecialistaComponent},
  {path:'marketplace', component:MarketplaceInicioComponent},
  {path:'blog', component:BlogFinalComponent},
  {path:'filtro-usuario', component:PreguntasFiltroFinalComponent},
  {path:'filtro-especialistas', component:PreguntasFiltro6Component},
  {path:'detalle-especialista', component:EspecialistaComponent},
  {path:'comprar', component:PlanyHorarioComponent},
  {path:'crear-cuenta', component:CrearunaCuentaComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
