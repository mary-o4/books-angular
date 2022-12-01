import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NailshopAboutComponent } from './nailshop-about/nailshop-about.component';
import { NailshopComponent } from './nailshop/nailshop.component';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'nailservice',
        pathMatch: 'full'
      },  
    {
        path: 'nailservice',
        component: NailshopComponent
      },
      {
        path: 'about',
        component: NailshopAboutComponent
      },
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }