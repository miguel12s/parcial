import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
export const userGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('rol')==="cliente"){
    return true
  }else{
    const router=inject(Router)
    router.navigate(['/auth/login'])
    return false

  }
};
