import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { DataService } from 'src/app/movie/services/data.service';
import { User } from 'src/app/movie/interfaces/movie';
import { UserService } from 'src/app/user/services/user.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
private router=inject(Router)
private fb=inject(FormBuilder)
public loginForm!:FormGroup

constructor(private dataservice:UserService){
this.loginForm=this.initForm()
}

initForm():FormGroup{
  return this.fb.group({
    email:['',Validators.email]
    , password:['',Validators.minLength(7)]
  })
}


onSubmit(){
const credentials=this.loginForm.value

this.dataservice.cart$.pipe(
  tap((users:User[])=>{
    
if(credentials.email==="migueldev" && credentials.password==="miguel123"){
  alert('entras')
    localStorage.setItem('rol','admin')
    console.log()
    this.router.navigate(['/admin'])
  return
}else{
  const usuarioEncontrado = users.find((user:User) =>
    user.username === credentials.email && user.password === credentials.password
  );
  if (!usuarioEncontrado){
  alert('no existe dicho usuario en el sistema')
  return
  }
  if(usuarioEncontrado.rol==='cliente'){
    localStorage.setItem('rol',usuarioEncontrado.rol)
    this.router.navigate(['/movie/list'])
  }
  
}


  
  })
).subscribe()





}



}
