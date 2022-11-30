import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NailshopAboutComponent } from './nailshop-about/nailshop-about.component';
import { NailshopComponent } from './nailshop/nailshop.component';
import { NailshopHomeComponent} from './nailshop-home/nailshop-home.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    {
        path: 'home',
        component: NailshopHomeComponent
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