import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { UserSignUpComponent } from './join/user-sign-up/user-sign-up.component';
import { CompanySignUpComponent } from './join/company-sign-up/company-sign-up.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'join',
        component: JoinComponent,
        children:[
            { path: 'candidate', component: UserSignUpComponent },
            { path: 'company', component: CompanySignUpComponent}
        ]},
    
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
