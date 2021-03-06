import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule), canLoad:[AuthGuard]},
  { path: 'dashboard', loadChildren: ()=> import('./networks/network.module').then(m => m.NetworkModule) },
  { path: '**', redirectTo:'/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
