import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {PokemonsModule} from "src/app/pokemons/pokemons.module"
import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
  { 
    path: "",
    component: HeaderComponent,
    children: [
      {
        path: "",
        loadChildren: ()=> import("src/app/pokemons/pokemons.module").then(module => PokemonsModule)
        
      },
      {
        path: "auth",
        loadChildren: ()=> import("src/app/auth/auth.module").then(m => AuthModule)
      },
      {
        path: '**',
        redirectTo: ''
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