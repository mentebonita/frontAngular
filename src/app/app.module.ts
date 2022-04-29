import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPeruComponent } from './inicioPeru/inicioPeru.component';
import { InicioMexicoComponent } from './inicioMexico/inicioMexico.component';
import { BlogFinalComponent } from './blogFinal/blogFinal.component';
import { CarruselFinComponent } from './carruselFin/carruselFin.component';
import { ContenedorTitleComponent } from './contenedorTitle/contenedorTitle.component';
import { ApoyoEmpresasComponent } from './apoyoEmpresas/apoyoEmpresas.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContenidoBlogComponent } from './contenidoBlog/contenidoBlog.component';
import { CrearunaCuentaComponent } from './crearunaCuenta/crearunaCuenta.component';
import { DescuentoBannerComponent } from './descuentoBanner/descuentoBanner.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { GaleriaServiciosComponent } from './galeriaServicios/galeriaServicios.component';
import { GrupoApoyoComponent } from './grupoApoyo/grupoApoyo.component';
import { HorarioEspecialistaComponent } from './horarioEspecialista/horarioEspecialista.component';
import { InformacionEspecialistaComponent } from './informacionEspecialista/informacionEspecialista.component';
import { InicioEspecialistaComponent } from './inicioEspecialista/inicioEspecialista.component';
import { LibroReclamacionesComponent } from './libroReclamaciones/libroReclamaciones.component';
import { MarketplaceDetalleCompraComponent } from './marketplaceDetalleCompra/marketplaceDetalleCompra.component';
import { MarketplaceGaleriaComponent } from './marketplaceGaleria/marketplaceGaleria.component';
import { MarketplaceInicioComponent } from './marketplaceInicio/marketplaceInicio.component';
import { EligeUnPlanComponent } from './eligeUnPlan/eligeUnPlan.component';
import { PerfilComprarSesionesComponent } from './perfilComprarSesiones/perfilComprarSesiones.component';
import { PerfilEspecialistaComponent } from './perfilEspecialista/perfilEspecialista.component';
import { PlanyHorarioComponent } from './planyHorario/planyHorario.component';
import { PoliticaCookiesComponent } from './politicaCookies/politicaCookies.component';
import { PoliticaPrivacidadComponent } from './politicaPrivacidad/politicaPrivacidad.component';
import { PopIniciarSesionComponent } from './popIniciarSesion/popIniciarSesion.component';
import { PorqueElegirnosComponent } from './porqueElegirnos/porqueElegirnos.component';
import { PreguntasFiltroFinalComponent } from './preguntasFiltroFinal/preguntasFiltroFinal.component';
import { PreguntasFiltro6Component } from './preguntasFiltro6/preguntasFiltro6.component';
import { PreguntasFrecuentesComponent } from './preguntasFrecuentes/preguntasFrecuentes.component';
import { RecuperaTuContrasenaComponent } from './recuperaTuContrasena/recuperaTuContrasena.component';
import { ReservarCitaFinalComponent } from './reservarCitaFinal/reservarCitaFinal.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { TerminosyCondicionesComponent } from './terminosyCondiciones/terminosyCondiciones.component';
import { UnPasoCrecerComponent } from './unPasoCrecer/unPasoCrecer.component';
import { UsuarioEspecialistaComponent } from './usuarioEspecialista/usuarioEspecialista.component';
import { UsuarioInformesComponent } from './usuarioInformes/usuarioInformes.component';
import { UsuarioMensajesComponent } from './usuarioMensajes/usuarioMensajes.component';
import { UsuarioObjetivosComponent } from './usuarioObjetivos/usuarioObjetivos.component';
import { UsuarioPagosComponent } from './usuarioPagos/usuarioPagos.component';
import { ProgramaIndividualMexicoComponent } from './programaIndividualMexico/programaIndividualMexico.component';
import { ProgramaGrupalMexicoComponent } from './programaGrupalMexico/programaGrupalMexico.component';
import { ProgramaIndividualPeruComponent } from './programaIndividualPeru/programaIndividualPeru.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreaTuPropioBienestarComponent } from './creaTuPropioBienestar/creaTuPropioBienestar.component';
import { ConoceNuestrosServiciosComponent } from './conoceNuestrosServicios/conoceNuestrosServicios.component';
import { QueDicenNuestrosClientesComponent } from './queDicenNuestrosClientes/queDicenNuestrosClientes.component';
import { ReservaTuCitaEnTresPasosComponent } from './ReservaTuCitaEnTresPasos/ReservaTuCitaEnTresPasos.component';
import { AunTienesDudasComponent } from './AunTienesDudas/AunTienesDudas.component';
import { ProgramasParaEmpresasComponent } from './programasParaEmpresas/programasParaEmpresas.component';
import { GruposDeApoyoComponent } from './gruposDeApoyo/gruposDeApoyo.component';
import { FooterComponent } from './footer/footer.component';
import { DanderasComponent } from './danderas/danderas.component';
import { ProgramaGrupalPeruComponent } from './programaGrupalPeru/programaGrupalPeru.component';
import { TipoSesionesComponent } from './tipoSesiones/tipoSesiones.component';
import { PerfilAdministradorComponent } from './perfilAdministrador/perfilAdministrador.component';
import { PerfilUsuarioComponent } from './perfilUsuario/perfilUsuario.component';
import { CrearEspecialistaComponent } from './crearEspecialista/crearEspecialista.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFunctions,getFunctions } from '@angular/fire/functions';

@NgModule({
  declarations: [						
    AppComponent,
    InicioPeruComponent,
      InicioPeruComponent,
      InicioMexicoComponent,
      BlogFinalComponent,
      CarruselFinComponent,
      ContenedorTitleComponent,
      ApoyoEmpresasComponent,
      CalendarComponent,
      ContenidoBlogComponent,
      CrearunaCuentaComponent,
      DescuentoBannerComponent,
      EspecialistaComponent,
      GaleriaServiciosComponent,
      GrupoApoyoComponent,
      HorarioEspecialistaComponent,
      InformacionEspecialistaComponent,
      InicioEspecialistaComponent,
      LibroReclamacionesComponent,
      MarketplaceDetalleCompraComponent,
      MarketplaceGaleriaComponent,
      MarketplaceInicioComponent,
      EligeUnPlanComponent,
      PerfilComprarSesionesComponent,
      PerfilEspecialistaComponent,
      PlanyHorarioComponent,
      PoliticaCookiesComponent,
      PoliticaPrivacidadComponent,
      PopIniciarSesionComponent,
      PorqueElegirnosComponent,
      PreguntasFiltroFinalComponent,
      PreguntasFiltro6Component,
      PreguntasFrecuentesComponent,
      RecuperaTuContrasenaComponent,
      ReservarCitaFinalComponent,
      SuscripcionComponent,
      TerminosyCondicionesComponent,
      UnPasoCrecerComponent,
      UsuarioEspecialistaComponent,
      UsuarioInformesComponent,
      UsuarioMensajesComponent,
      UsuarioObjetivosComponent,
      UsuarioPagosComponent,
      ProgramaIndividualMexicoComponent,
      ProgramaGrupalMexicoComponent,
      ProgramaIndividualPeruComponent,
      NavbarComponent,
      CreaTuPropioBienestarComponent,
      ConoceNuestrosServiciosComponent,
      QueDicenNuestrosClientesComponent,
      PorqueElegirnosComponent,
      ReservaTuCitaEnTresPasosComponent,
      AunTienesDudasComponent,
      ProgramasParaEmpresasComponent,
      GruposDeApoyoComponent,
      FooterComponent,
      DanderasComponent,
      ProgramaGrupalPeruComponent,
      TipoSesionesComponent,
      PerfilAdministradorComponent,
      PerfilUsuarioComponent,
      CrearEspecialistaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFunctions(() => getFunctions())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
