import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-layout-page',
  templateUrl: './movie-layout-page.component.html',
  styleUrls: ['./movie-layout-page.component.scss']
})
export class MovieLayoutPageComponent  {
  constructor(private productService:MovieService,private router:Router){}
  total$=this.productService.priceObservable
  quantity$=this.productService.quantityObservable

  goToShopping(){
    this.router.navigate(['/movie/show'])
  }

  home(){
      this.router.navigate(['/movie/list'])
    
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/login'])

  }



}
