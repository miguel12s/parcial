import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss']
})
export class ShowPageComponent {
  indice!: number;
  products: Product[]=[
    
  ]
  counter: number = 0;
  ngOnInit(): void {
console.log('entrastes a');

    this.productService.cartObservable
      .pipe(
        tap((product: Product[]) => {
          
          this.products = product;
          console.log(this.products)
          
        })
      )
      .subscribe();
  }
  constructor(
    private productService: MovieService,
    private router:Router,
    private cdr: ChangeDetectorRef
  ) {}

  // paintStars(numberStairs: number): Array<number> {

  //   let stairs = String(numberStairs);

  //   let array = stairs.split('.');

  //   let porcentStair = Number(array[1]) / 10;
  //   const numberstairs =
  //     Number(porcentStair) < 0.4
  //       ? Math.floor(Number(numberStairs))
  //       : Math.ceil(Number(numberStairs));

  //   let numberOfStairs = [];
  //   for (let index = 0; index < numberstairs; index++) {
  //     numberOfStairs[index] = Math.random();
  //   }

  //   return numberOfStairs;
  // }
 

  addQty(product:Product){
this.productService.updateQty(product)

  }

  deleteQty(product:Product){
    this.productService.deleteQty(product)
  }

  // deleteProduct(product:Product){
  //   Swal.fire({
  //     title: 'Estas seguro',
  //     text: "No podras revertirlo",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Si deseo borrarlo'
  //   }).then(async(result:any) => {
  //     if (result.isConfirmed) {
  //       console.log('entras');
        
  //       this.productService.deleteProduct(product)
  //       this.cdr.detectChanges()

  //       Swal.fire(
  //         'Eliminando',
  //         'Tu producto ha sido eliminado',
  //         'success',
          
  //       )

  //     }
  //   })   

  // }

  finishShoppingCard():void{
    alert('la compra se ha realizado')
    this.router.navigate(['/movie/list'])
    this.productService.resetCart()
    






  }
}
