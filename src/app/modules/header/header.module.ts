import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header.routing';
import { HeaderComponent } from '../core/page/header/header.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  providers: [],

})
export class HeaderModule { }
