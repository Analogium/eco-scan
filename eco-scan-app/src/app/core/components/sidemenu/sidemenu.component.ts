import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  @Input() isOpen: boolean = false;


  hideMenu() {
    this.isOpen = !this.isOpen;
  }
}
