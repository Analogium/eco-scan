import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CscanComponent } from './components/cscan/cscan.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';




@NgModule({
  declarations: [
    NavComponent,
    CscanComponent,
    SidemenuComponent
    
  ],
  imports: [
    CommonModule

  ],
  exports: [
    NavComponent,
    CscanComponent,
    SidemenuComponent]
})
export class CoreModule { }
