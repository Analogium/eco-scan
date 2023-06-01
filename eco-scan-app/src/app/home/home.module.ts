import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home/page-home.component';
import { CoreModule } from '../core/core.module';







@NgModule({
  declarations: [
    PageHomeComponent,

 

    
  ],
  imports: [
    CommonModule,
    CoreModule
  


  ],
  exports: [
    PageHomeComponent
  ]
})
export class HomeModule { }
