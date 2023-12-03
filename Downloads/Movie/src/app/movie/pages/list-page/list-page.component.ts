import { Component ,OnInit,inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../interfaces/movie";
import { MovieService } from '../../services/movie.service';
import { DataService } from '../../services/data.service';
import { tap } from 'rxjs';
        import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit{
    url: string = 'https://fakestoreapi.com/products';
    movies: Product[] = [];
    totalMovies!: number;
    currentPage=1
    pageSize: number=5;
    paginatedMovies: Product[]=[];
    private service=inject(DataService)
    private proService=inject(MovieService)
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.service.cart$.pipe(
            tap((res:Product[])=>{
                console.log(res)
                this.movies=res
                this.totalMovies=this.movies.length
                this.updatePage(5)

            })
        ).subscribe()

          
}

      

    changePage(event:any){
        console.log(event)
        const pageSize=event.pageSize
       this.currentPage=event.pageIndex+1
        console.log(this.currentPage)
       this.updatePage(pageSize)

    }

    private updatePage(pageSize:number){
        const startIndex = (this.currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        this.paginatedMovies = this.movies.slice(startIndex, endIndex);
    }
    addCart(product:any){
        console.log('desde la lista ',product)
        this.proService.addToCart(product)
        

    }
}
