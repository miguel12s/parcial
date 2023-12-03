import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministratorRoutingModule} from "./administrator-routing.module";
import { AdminLayoutPageComponent } from './pages/admin-layout-page/admin-layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ShowPageComponent } from './pages/show-page/show-page.component';
import { SharedModule } from '../shared/shared.module';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {ProductComponent} from './pages/product/product.component'
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './pages/list-users/list-users.component';
@NgModule({
    declarations: [
    AdminLayoutPageComponent,
    ListPageComponent,
    CreatePageComponent,
    ShowPageComponent,
    ProductComponent,
    ListUsersComponent
  ],
    imports: [
        CommonModule,
        AdministratorRoutingModule,
        SharedModule,MatPaginatorModule,MatTableModule,MatButtonModule,ReactiveFormsModule
    ]
})
export class AdministratorModule {
}
