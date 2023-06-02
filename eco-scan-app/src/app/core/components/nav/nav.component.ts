import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  sidemenuOpen = false;

  toggleSidemenu() {
    this.sidemenuOpen = !this.sidemenuOpen;
  }

  redirectHome() {
    localStorage.removeItem('barcode')
    window.location.href = '/';
  }
}
