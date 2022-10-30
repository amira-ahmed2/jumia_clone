import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Routes ,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'',redirectTo:'productslist',pathMatch:'full'},
      {path:'products',component:ProductsComponent},
      {path:'products/:_id',component:ProductDetailsComponent},
    ];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class ProductsModule { }
