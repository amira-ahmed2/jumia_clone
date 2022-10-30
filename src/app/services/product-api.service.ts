import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, from, Observable, of, retry, Subscription, throwError, UnsubscriptionError } from 'rxjs';
import { IProduct } from './../models/i-product';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private httpoptions ={}

  constructor( private httpclient:HttpClient) {

    this.httpoptions={
      headers:new HttpHeaders({
        'content-Type':'application/json'
      })
    }
  }

  getAllProduct():Observable<IProduct[]>{
    return this.httpclient.get<any[]>(`${environment.apiBaseUrl}/products`)
  }

  getProductByID(prdID:any):Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.apiBaseUrl}/products/${prdID}`)
  }
  getProductByIDSession(prdID:any):Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.apiBaseUrl}/products/${prdID}`)
  }
}
