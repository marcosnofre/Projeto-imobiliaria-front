import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/autenticador/login/login.component';
import { HomeComponent } from 'src/app/paginas/home/home.component';
import { CategoriaComponent } from 'src/app/paginas/categoria/categoria.component';
import { ImovelComponent } from 'src/app/paginas/imovel/imovel.component';


import { GuardaGuard } from 'src/app/util/guarda.guard';

const routes: Routes = [
  {path: '', component: LoginComponent }
  , {path: 'login', component: LoginComponent }
  , {path: 'home', component: HomeComponent, canActivate: [GuardaGuard]}
  , {path: 'categoria', component: CategoriaComponent, canActivate: [GuardaGuard]}
  , {path: 'imovel', component: ImovelComponent, canActivate: [GuardaGuard]}
  , {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
