import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { NavComponent } from '../nav/nav.component';
import { ContentLayoutComponent } from './content-layout.component';


@NgModule({
  declarations: [
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    NavModule
  ],
  exports: [
    ContentLayoutComponent
  ]
})
export class ContentLayoutModule { }
