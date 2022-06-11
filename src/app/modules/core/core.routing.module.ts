import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './page/header/header.component';

const routes: Routes = [
  { 
    path: "",
    component: HeaderComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

// { 
//   path: "/",
//   loadChildren: ()=> import( "../header/header.module" ).then (module =>(module.HeaderModule)) 
// } 