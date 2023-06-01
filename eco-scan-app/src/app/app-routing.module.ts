import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './core/components/page-home/page-home.component';
import { CscanComponent } from './core/components/cscan/cscan.component';



const routes: Routes = [
  { path: '', component: CscanComponent },
  { path: 'home', component: PageHomeComponent },
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
