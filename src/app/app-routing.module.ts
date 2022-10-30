import { NgModule, Component } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';


const routes: Routes = [

        {path:'landing',component:LandingPageComponent},
  {path:'',redirectTo:'/landing',pathMatch:'full'},
  {path: 'pros',
  loadChildren: () => import('src/app/components/products/products.module').then(m => m.ProductsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
