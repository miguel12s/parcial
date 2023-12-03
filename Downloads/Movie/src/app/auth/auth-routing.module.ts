import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import {AuthLayoutPageComponent} from "./pages/auth-layout-page/auth-layout-page.component";

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutPageComponent,
        children: [
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegisterPageComponent },
            { path: '**', redirectTo: 'login' },
        ]
    }
];




@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ],
})
export class AuthRoutingModule { }
