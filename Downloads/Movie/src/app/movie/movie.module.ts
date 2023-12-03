import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowPageComponent} from './pages/show-page/show-page.component';
import {MovieLayoutPageComponent} from './pages/movie-layout-page/movie-layout-page.component';
import {MovieRoutingModule} from "./movie-routing.module";
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MovieComponent } from './components/movie/movie.component';
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule}  from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatIconModule} from '@angular/material/icon'
@NgModule({
    declarations: [
        ShowPageComponent,
        MovieLayoutPageComponent,
        ListPageComponent,
        MovieComponent
    ],
    imports: [
        CommonModule,
        MovieRoutingModule,MatSelectModule,MatCardModule,MatButtonModule,MatToolbarModule,MatPaginatorModule,MatIconModule
    ]
})
export class MovieModule {
}
