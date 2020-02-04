import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NetworkRoutingModule } from './network-routing.module';

// import { 
//     MatMenuModule,
//     MatIconModule,
//     MatSidenavModule,
//     MatProgressSpinnerModule,
//     MatListModule,
//     MatToolbarModule,
//  } from '@angular/material';

//Shared Modules
import { SharedModule } from '../shared/shared.module';
import { NetworkComponent } from './network.component';


@NgModule({
    declarations: [HomeComponent,NetworkComponent],
    imports: [ 
        CommonModule,
        NetworkRoutingModule,
        // MatMenuModule,
        // MatIconModule,
        // MatSidenavModule,
        // MatProgressSpinnerModule,
        // MatListModule,
        // MatToolbarModule,
        // ReactiveFormsModule,
        SharedModule
    ],
    exports: [HomeComponent],
    providers: [],
})

export class NetworkModule {}