import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProductService } from './services/service-product.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ServiceProductService
  ],
})
export class SharedModule { }
