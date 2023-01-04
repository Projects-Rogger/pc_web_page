import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path:'login',
    loadChildren:() => import('./pages/login/login-routing.module').then(m => m.LoginRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
