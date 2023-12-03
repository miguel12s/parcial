import {Component, EventEmitter, Input,Output,ChangeDetectionStrategy} from '@angular/core';
import {Product} from "../../interfaces/movie";
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
    @Input() product: Product = {} as Product;
    @Output() addCart=new EventEmitter<Product>()

    addCartToClick(product:Product):void{
      this.addCart.emit(product)
    }
}
