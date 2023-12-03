import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Product, User } from 'src/app/movie/interfaces/movie';
import { DataService } from 'src/app/movie/services/data.service';
import { MovieService } from 'src/app/movie/services/movie.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  
  public users!: User[]
  public userForm!:FormGroup
  public modificarForm!:FormGroup
  totalUser!: number;
 
  constructor(private httpClient: HttpClient,private fb:FormBuilder,private productService:MovieService,private service:UserService) {
this.userForm=this.initForm()
this.modificarForm=this.initModificarForm()
   }

   
  currentPage = 1
  pageSize: number = 5;
  paginatedUsers: User[] = [];

  initForm():FormGroup{
return this.fb.group({
 
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  phone:['',Validators.required],
  username:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required],

})
  }
 
  initModificarForm():FormGroup{
    return this.fb.group({
      id:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      phone:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      
    
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
  //     })fff
  // ).subscribe()
 
  this.service.cart$.pipe(
        tap((user:User[])=>{
            console.log(user)
            this.users=user
            this.totalUser = this.users.length;
  
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
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }

  onSubmit(){



    const user:any=this.userForm.value
    user.id=this.users.length+1
    const name={
      firstname:user.firstname,
      lastname:user.lastname
    }
    const newUser:User={
      email:user.email,
      id:user.id,
      name:name,
      password:user.password,
      phone:user.phone,
      rol:"cliente",
      username:user.username
    }

    console.log(newUser)
    this.service.createProduct(newUser).subscribe(() => {
      this.service.addCart(newUser)

      // Lógica adicional después de crear el producto, como redirigir a otra página o mostrar un mensaje de éxito
      console.log('Nuevo producto creado:', user);
      // Reinicia el formulario o realiza otras acciones según tus necesidades
      
    });
  
    

  }

  delete(product_id:number){
    this.service.deleteProduct(product_id)
    

  }

  modificar(product_id:number){
    const userFilter:any=this.service.getUser(product_id)
    const user:User=userFilter[0]
    this.modificarForm.patchValue({
      id:user.id,
      firstname:user.name.firstname,
      lastname:user.name.lastname,
      phone:user.phone,
      username:user.username,
      email:user.email,
      password:user.password
    })
    
  }

  onUpdate(){
    const modificar=this.modificarForm.value
    const name={
      firstname:modificar.firstname,
      lastname:modificar.lastname
    }

    const newUser:User={
      id:modificar.id,
      email:modificar.email,
      name:name,
      phone:modificar.phone,
      username:modificar.username,
      password:modificar.password,
      rol:"cliente"

    }
    console.log(modificar);
    
    this.service.updateUser(newUser)
    
  }
}
