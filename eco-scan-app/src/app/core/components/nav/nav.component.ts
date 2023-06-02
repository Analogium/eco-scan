import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
