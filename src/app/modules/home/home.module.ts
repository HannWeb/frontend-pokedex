import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { PokedexMaterialModule } from 'src/app/layout/material/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, CardModule, PokedexMaterialModule],
})
export class HomeModule {}
