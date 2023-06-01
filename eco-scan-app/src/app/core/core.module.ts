import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ScanComponent } from './components/scan/scan.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';




@NgModule({
  declarations: [
    NavComponent,
    ScanComponent,
    SidemenuComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    ScanComponent,
    SidemenuComponent]
})
export class CoreModule { }
