import { Component, OnInit } from '@angular/core';
import { ProductApiService } from './../../../services/product-api.service';
import { IProduct } from './../../../models/i-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodListOfCateg: IProduct[] = [];

  constructor(private productApi:ProductApiService) {

   }

  ngOnInit(): void {
    this.productApi.getallproduct().subscribe((pro)=>{
      console.log(this.prodListOfCateg=pro)
    })
  }

}
