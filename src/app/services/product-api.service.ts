import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, from, Observable, of, retry, Subscription, throwError, UnsubscriptionError } from 'rxjs';
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

  getallproduct():Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.apiBaseUrl}/products`)
  }
}
