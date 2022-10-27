import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Routes ,RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/productslist',pathMatch:'full'},
      {path:'productslist',component:ProductsComponent},
      {path:'productslist/:id',component:ProductDetailsComponent},
    ];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
