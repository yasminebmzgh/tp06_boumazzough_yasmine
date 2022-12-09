import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../services/http-service.service';
import {Observable} from 'rxjs';
import { Product } from '../models/product.model';
import { Store } from '@ngxs/store';
import { AddProduct } from '../shared/actions/panier.action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private httpservice : HttpServiceService, private store : Store, private router: Router) { 
    this.products = [];
    this.observable$ = new Observable;
    this.researchInput="";
  }

  observable$ : Observable<Product[]>;
  products: Product[];
  researchInput: string;

  ngOnInit(): void {
    this.observable$ = this.httpservice.getCatalogue();   
    this.observable$.subscribe(item => this.products = item); 
  }

  addPanier (title: string, reference: string, price: number){
    this.store.dispatch(new AddProduct({"title": title, "reference": reference, "price": price}));
  }

  redirectDetails(reference: string){
    this.router.navigate(['/product/detail/',reference]);
  }

}
