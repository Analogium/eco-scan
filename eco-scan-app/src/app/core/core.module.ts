import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ScanComponent } from './components/scan/scan.component';




@NgModule({
  declarations: [
    NavComponent,
    ScanComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    ScanComponent]
})
export class CoreModule { }
