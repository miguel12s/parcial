import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutPageComponent} from "./pages/admin-layout-page/admin-layout-page.component";
import {CreatePageComponent} from "./pages/create-page/create-page.component";
import {ShowPageComponent} from "./pages/show-page/show-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import { guardGuard } from './guards/guard.guard';
import { ListUsersComponent } from './pages/list-users/list-users.component';

const routes: Routes = [
    {
        path: '',
        
        component: AdminLayoutPageComponent,
        canActivate:[guardGuard],
        children: [
            {path: 'create-movie', component: CreatePageComponent},
            {path: 'show-movie', component: ShowPageComponent},
            {path: 'list-movie', component: ListPageComponent},
            {path: 'list-user', component: ListUsersComponent},
            {path: '**', redirectTo: 'list-movie'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule {
}
