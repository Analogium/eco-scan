import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';



const routes: Routes = [
  { path: '', component: PageHomeComponent },
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
