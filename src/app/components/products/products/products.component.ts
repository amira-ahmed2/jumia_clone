import { Component, OnInit } from '@angular/core';
import { ProductApiService } from './../../../services/product-api.service';
import { IProduct } from './../../../models/i-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = [];
 pro!:IProduct
 li:any;
 lis :IProduct[] = [];
 idProduct:any;
  constructor(private productApi:ProductApiService, private router:Router) {

   }

  ngOnInit(): void {
    this.productApi.getAllProduct().subscribe((pro)=>{
      this.li=pro;
      this.lis=this.li.products;
      console.log(this.lis)
    })
    // this.getAll()
  }
  itemfun(index: number, item: IProduct) {
    return item._id;
  }
  openProductDetails(_id:any){
    this.idProduct=_id
    sessionStorage.setItem('idProduct',this.idProduct);
        this.router.navigate(['./pros/products/',_id]);

  }

}
