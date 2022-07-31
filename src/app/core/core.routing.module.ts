import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from 'src/app/modules/users/users.module';
import { CoreComponent } from './pages/core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then((m) => m.HomeModule),
      },
      // {
      //   path: 'auth',
      //   loadChildren: () =>
      //     import('src/app/modules/users/users.module').then((m) => UsersModule),
      // },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}

// {
//   path: "/",
//   loadChildren: ()=> import( "../header/header.module" ).then (module =>(module.HeaderModule))
// }
