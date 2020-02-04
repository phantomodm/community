import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { AuthRoutingModule } from './auth.routing';
import { AuthService } from "./auth.service";
import { AuthGuard } from './auth.guard';

import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
//import * as fromAuth from './reducers';
//import {authReducer} from './reducers';
//import {EffectsModule} from '@ngrx/effects';
//import {AuthEffects} from './auth.effects';

@NgModule({
    declarations: [LoginComponent, JoinComponent],
    imports: [ CommonModule,
        MatCardModule,
        MatInputModule,
        AuthRoutingModule,
        SharedModule
        //StoreModule.forFeature('auth', authReducer),
        //EffectsModule.forFeature([AuthEffects]) 
    ],
    exports: [LoginComponent, JoinComponent],
    providers: [],
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
              AuthService,
                AuthGuard
            ]
        }
    }
}