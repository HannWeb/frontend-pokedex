import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';

const routes: Routes = [
  { 
    path: "core",
    loadChildren: ()=> import( "./modules/core/core.module" ).then (module =>(module.CoreModule)) 
   },
   { 
     path: "xx",
     redirectTo: "/"
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
