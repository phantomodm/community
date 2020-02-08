import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkRoutingModule } from './network-routing.module';

import { 
    MatTableModule
 } from '@angular/material';

//Shared Modules
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [ DashboardComponent,HomeComponent],
    imports: [ 
        CommonModule,
        NetworkRoutingModule,
        MatTableModule,
        // MatMenuModule,
        // MatIconModule,
        // MatSidenavModule,
        // MatProgressSpinnerModule,
        // MatListModule,
        // MatToolbarModule,
        // ReactiveFormsModule,
        SharedModule
    ],
    exports: [DashboardComponent],
    providers: [],
})

export class NetworkModule {}