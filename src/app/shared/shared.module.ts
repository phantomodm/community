import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

//AngularMaterial
import { 
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatToolbarModule
    
  } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [ 
       
    ],
    exports: [ 
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class SharedModule {}