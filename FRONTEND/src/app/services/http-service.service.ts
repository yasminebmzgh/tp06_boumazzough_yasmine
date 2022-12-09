import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient : HttpClient) { }

  public getCatalogue () : Observable<Product[]> {
    return this.httpClient.get<Product[]> (environment.getCatalogue);
  }
}
