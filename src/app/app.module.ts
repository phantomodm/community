import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
//import {ReactiveFormsModule} from '@angular/forms';

//NGRX Store,Data,Entity
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

//Router Modules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

//Shared Modules
import { SharedModule } from './shared/shared.module';

//AngularMaterial
// import { 
//   MatMenuModule,
//   MatIconModule,
//   MatCardModule,
//   MatButtonModule,
//   MatProgressSpinnerModule,
//   MatListModule,
//   MatToolbarModule,
  
// } from '@angular/material';

//Ng-Bootstrap
import { 
  NgbModule
 } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
