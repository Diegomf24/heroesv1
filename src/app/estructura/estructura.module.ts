import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { PieComponent } from './components/pie/pie.component';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class EstructuraModule { }
