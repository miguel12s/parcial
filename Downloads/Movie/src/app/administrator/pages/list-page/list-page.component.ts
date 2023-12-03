import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Product } from 'src/app/movie/interfaces/movie';
import { DataService } from 'src/app/movie/services/data.service';
import { MovieService } from 'src/app/movie/services/movie.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public products!: Product[]
  public productForm!:FormGroup
  public modificarForm!:FormGroup
  totalProduct!: number;
  constructor(private httpClient: HttpClient,private fb:FormBuilder,private productService:MovieService,private service:DataService) {
this.productForm=this.initForm()
this.modificarForm=this.initModificarForm()
   }

   
  currentPage = 1
  pageSize: number = 5;
  paginatedMovies: Product[] = [];

  initForm():FormGroup{
return this.fb.group({
  title:['',Validators.required],
  price:['',Validators.required],
  description:['',Validators.required],
  image:['',Validators.required]

})
  }

  initModificarForm():FormGroup{
    return this.fb.group({
      id:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required]
    
    })
  }
  ngOnInit() {
    // this.httpClient.get<Product[]>('https://fakestoreapi.com/products').subscribe(

    //   (data: Product[]) => {
    //     this.products = data;
    //     this.totalProduct = this.products.length
    //     this.updatePage(5)
    //   }

    // )
  //   this.service.getProducts().pipe(
  //     tap((product:Product[])=>{
  //         console.log(product)
  //         this.products=product
  //         this.totalProduct = this.products.length;

  //         this.updatePage(5)
  //     })
  // ).subscribe()
  this.service.cart$.subscribe((updatedProducts: Product[]) => {
    this.products = updatedProducts;
    this.totalProduct = this.products.length;
  
            this.updatePage(5)
  });
  this.service.cart$.pipe(
        tap((product:Product[])=>{
            console.log(product)
            this.products=product
            this.totalProduct = this.products.length;
  
            this.updatePage(5)
        })
    ).subscribe()
  }

  changePage(event: any) {
    console.log(event)
    const pageSize = event.pageSize
    this.currentPage = event.pageIndex + 1
    console.log(this.currentPage)
    this.updatePage(pageSize)

  }

  private updatePage(pageSize: number) {
    const startIndex = (this.currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    this.paginatedMovies = this.products.slice(startIndex, endIndex);
  }

  onSubmit(){
    const product:Product=this.productForm.value
    product.id=this.products.length+1
    product.category='electronic'
    this.service.createProduct(product).subscribe(() => {
      this.service.addCart(product)

      // Lógica adicional después de crear el producto, como redirigir a otra página o mostrar un mensaje de éxito
      console.log('Nuevo producto creado:', product);
      // Reinicia el formulario o realiza otras acciones según tus necesidades
      
    });
  
    

  }

  delete(product_id:number){
    this.service.deleteProduct(product_id)
    

  }

  modificar(product_id:number){
    const productFilter:any=this.service.getProduct(product_id)
    const product:Product=productFilter[0]
    console.log(product)
    this.modificarForm.patchValue({
      id:product.id,
      title:product.title,
      price:product.price,
      description:product.description,
      image:product.image,
    })
    
  }

  onUpdate(){
    const modificar=this.modificarForm.value
    this.service.updateProduct(modificar)
    
  }
}
