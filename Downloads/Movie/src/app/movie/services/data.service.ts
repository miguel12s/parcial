import { Injectable } from '@angular/core';
import { Product, User } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private products:Product[]=[]
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$: Observable<Product[]> = this.cartSubject.asObservable();
 
  constructor(private http:HttpClient){
    this.getProducts()
  }

 

  

  getProducts() {
    // Realiza la solicitud HTTP y usa tap para actualizar el estado local
    this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      tap((apiProducts: Product[]) => {
        // Actualiza el estado local con los productos de la API
        this.products = apiProducts;

        // Combina los productos de la API con los productos del carrito
        const combinedProducts = [...this.products, ...this.cartSubject.value];
        console.log(combinedProducts)

        
        // Emite los productos combinados a través del observable
        this.cartSubject.next(combinedProducts);
      })
    ).subscribe();
  }

  addCart(product: Product) {
    // Agrega el producto al carrito a través del array local
    const updatedCart = [...this.cartSubject.value, product];
    
    // Emite los productos combinados a través del observable
    this.cartSubject.next(updatedCart);
  }
  createProduct(newProduct: Product): Observable<Product> {
    // Realiza una solicitud HTTP para crear un nuevo producto
    return this.http.post<Product>('https://fakestoreapi.com/products', newProduct).pipe(
      tap((createdProduct: Product) => {
        // Agrega el nuevo producto al array local de productos
      })
    );
  }

  deleteProduct(id_product:number){

    if(id_product>=0){
      this.products = this.products.filter(product => product.id !== id_product);
      console.log(this.products)
  
      // Actualiza el estado local y emite los cambios
      this.cartSubject.next([...this.products]);
    
  }else{
    alert('no se pudo eliminar')
  }
}
updateProduct(products:Product){
  const indexToUpdate = this.products.findIndex(product => product.id === products.id);

  if (indexToUpdate !== -1) {
    // Actualiza el producto en el array
    this.products[indexToUpdate] = products;
    
    // Actualiza el estado local y emite los cambios
    this.cartSubject.next([...this.products]);
    
    console.log(`Producto con ID ${products.id} actualizado correctamente.`);
  } else {
    console.error(`No se pudo encontrar el producto con ID ${products.id} para actualizar.`);
  }
}

getProduct(product_id:number){
  return this.products.filter(product=>product.id===product_id)

}


}