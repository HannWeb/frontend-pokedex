import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { HeaderComponent } from './page/header/header.component';

const routes: Routes = [
  { 
    path: "",
    component: HeaderComponent,
    children: [
      {
        path: "home",
        loadChildren: ()=> import("../home/home.module").then(module => module.HomeModule)
        
      },
      {
        path: "other",
      },
      {
        path: "otherOne",
      },
      {
        path: '**',
        redirectTo: 'home'
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