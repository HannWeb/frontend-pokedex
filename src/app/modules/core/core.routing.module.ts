import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';
import { HeaderComponent } from './page/header/header.component';

const routes: Routes = [
  { 
    path: "",
    component: HeaderComponent,
    children: [
      {
        path: "/",
        loadChildren: ()=> import("../home/home.module").then(module => module.HomeModule)
        
      },
      {
        path: "",
      },
      {
        path: "",
      }

    ]

    
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