import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private router=inject(Router)

  goToHome(){
    this.router.navigate(['admin/list-movie'])
  }
  goToUsers(){
    this.router.navigate(['admin/list-user'])
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/login'])

  }
}
