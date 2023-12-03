import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404PageComponent} from './shared/pages/error404-page/error404-page.component';
import { AdministratorModule } from './administrator/administrator.module';
import { AdminLayoutPageComponent } from './administrator/pages/admin-layout-page/admin-layout-page.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'movie',
        loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule),
    },
    {
        path:'admin',
        loadChildren:()=>import('./administrator/administrator.module').then(m=>m.AdministratorModule)
    },
    
    {
        path: '404',
        component: Error404PageComponent,
    },
    
    
    {
        path: '',
        redirectTo: 'movie',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
