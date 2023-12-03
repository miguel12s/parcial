import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieLayoutPageComponent} from "./pages/movie-layout-page/movie-layout-page.component";
import {ShowPageComponent} from "./pages/show-page/show-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import { userGuard } from '../administrator/guards/user.guard';

const routes: Routes = [
    {
        path: '',
        component: MovieLayoutPageComponent,
        canActivate:[userGuard],

        children: [
            { path: 'list', component: ListPageComponent },
            { path: 'show', component: ShowPageComponent },
            { path: '**', redirectTo: 'show' },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ],
})
export class MovieRoutingModule { }
