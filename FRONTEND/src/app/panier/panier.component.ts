import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { DelProduct } from '../shared/actions/panier.action';
import { PanierState } from '../shared/states/panier-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  products$ : Observable<Product[]>;
  products:  Product[];
  constructor(private store:Store) {
    this.products$ = new Observable();
    this.products = [];
   }

  ngOnInit(): void {
    this.products$ = this.store.select(PanierState.getProducts);
    this.products$.subscribe(item => this.products = item);
  }

  removeProduct(product: Product){
    this.store.dispatch(new DelProduct(product));
  }

}
