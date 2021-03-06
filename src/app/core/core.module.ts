//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexMaterialModule } from './material/material.module'
//Componentes
import { CoreRoutingModule } from './core.routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    PokedexMaterialModule
  ],
  providers: [],

})
export class CoreModule { }
