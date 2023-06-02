import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './core/components/page-home/page-home.component';
import { CscanComponent } from './core/components/cscan/cscan.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ViewProductComponent } from './core/components/view-product/view-product.component';



const routes: Routes = [
  { path: '', component: CscanComponent },
  { path: 'home', component: PageHomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'product/:id', component:ViewProductComponent  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
