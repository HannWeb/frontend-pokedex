//Modules
import { NgModule } from '@angular/core';
import { ContentLayoutComponent } from '../layout/content-layout/content-layout.component';
import { ContentLayoutModule } from '../layout/content-layout/content-layout.module';

//Components
import { CoreRoutingModule } from './core.routing.module';
import { CoreComponent } from './pages/core/core.component';

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
