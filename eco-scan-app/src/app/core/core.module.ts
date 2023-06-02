import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CscanComponent } from './components/cscan/cscan.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { ViewProductComponent } from './components/view-product/view-product.component';




@NgModule({
  declarations: [
    NavComponent,
    CscanComponent,
    SidemenuComponent,
    PageHomeComponent,
    ViewProductComponent
    
  ],
  imports: [
    CommonModule

  ],
  exports: [
    NavComponent,
    CscanComponent,
    SidemenuComponent,
    PageHomeComponent,
    ViewProductComponent]
})
export class CoreModule { }
