import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    { path: 'start', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '', redirectTo:'/start', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NetworkRoutingModule {}
