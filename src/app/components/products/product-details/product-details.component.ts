import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/i-product';
import { ProductApiService } from 'src/app/services/product-api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prd!:IProduct;
  currentPrdID:any;
  prdIDList:number[]=[];
  currentIndex:any=0;
  li:any;
  idProductSessionStorage:any;
  constructor(private getProductDetails:ProductApiService,private router:Router,private activateRoute:ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
 this.idProductSessionStorage= sessionStorage.getItem('idProduct')

    this.getProductDetails.getProductByIDSession(this.idProductSessionStorage).subscribe((data)=>{
      this.li=data;
      this.prd=this.li.product;
              console.log(this.prd)

    })


  }

}
