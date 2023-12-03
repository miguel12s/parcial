import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product, User } from 'src/app/movie/interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private users:User[]=[]
  private userSubject = new BehaviorSubject<User[]>([]);
  cart$: Observable<User[]> = this.userSubject.asObservable();
  
  constructor(private http:HttpClient){
    this.getProducts()
  }
/*malo*/ 
  

  

  getProducts() {
    // Realiza la solicitud HTTP y usa tap para actualizar el estado local
    this.http.get<User[]>('https://fakestoreapi.com/users').pipe(
      tap((apiProducts: User[]) => {
        // Actualiza el estado local con los productos de la API
        this.users = apiProducts;

        // Combina los productos de la API con los productos del carrito
        const combinedProducts = [...this.users, ...this.userSubject.value];
        console.log(combinedProducts)

        
        // Emite los productos combinados a través del observable
        this.userSubject.next(combinedProducts);
      })
    ).subscribe();
  }

  addCart(user: User) {
    // Agrega el usuario al carrito a través del array local
    const updatedCart = [...this.userSubject.value,user];
    
    // Emite los productos combinados a través del observable
    this.userSubject.next(updatedCart);
  }
  createProduct(newUser: User): Observable<User> {
    // Realiza una solicitud HTTP para crear un nuevo producto
    return this.http.post<User>('https://fakestoreapi.com/users', newUser).pipe(
      tap((createdProduct: User) => {
        // Agrega el nuevo producto al array local de productos
      })
    );
  }

  deleteProduct(id_user:number){

    if(id_user>=0){
      this.users = this.users.filter(user => user.id !== id_user);
      console.log(this.users)
  
      // Actualiza el estado local y emite los cambios
      this.userSubject.next([...this.users]);
    
  }else{
    alert('no se pudo eliminar')
  }
}
updateUser(users:User){
  console.log(users);
  
  const indexToUpdate = this.users.findIndex(user => user.id === users.id);
  console.log(indexToUpdate)
  if (indexToUpdate !== -1) {
    // Actualiza el producto en el array
    this.users[indexToUpdate] = users;
    
    // Actualiza el estado local y emite los cambios
    console.log(this.users);
    
    this.userSubject.next([...this.users]);
    
    console.log(`Producto con ID ${users.id} actualizado correctamente.`);
  } else {
    console.error(`No se pudo encontrar el producto con ID ${users.id} para actualizar.`);
  }
}

getUser(user_id:number){
  return this.users.filter(user=>user.id===user_id)

}
}
