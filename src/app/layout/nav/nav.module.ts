import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { PokedexMaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    PokedexMaterialModule
  ],
  exports: [
    NavComponent,
  ]
})
export class NavModule { }
