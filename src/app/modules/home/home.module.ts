import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, CardModule],
})
export class HomeModule {}
