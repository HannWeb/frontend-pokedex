import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { PokedexMaterialModule } from 'src/app/layout/material/material.module';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    PokedexMaterialModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
