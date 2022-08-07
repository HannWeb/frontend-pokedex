//Modules
import { NgModule } from '@angular/core';

//Components
import { CoreRoutingModule } from './core.routing.module';
import { CoreComponent } from './pages/core/core.component';
import { ContentLayoutModule } from '../layout/content-layout/content-layout.module';

@NgModule({
  declarations: [
    CoreComponent,
  ],
  imports: [
    CoreRoutingModule,
    ContentLayoutModule
  ],
  providers: [],

})
export class CoreModule { }
