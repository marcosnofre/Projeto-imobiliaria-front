import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './autenticador/login/login.component';
import { HomeComponent } from './paginas/home/home.component';

import { GuardaGuard } from './util/guarda.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GuardaGuard] },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
