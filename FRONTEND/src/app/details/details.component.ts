import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpServiceService } from '../services/http-service.service';
import { AddProduct } from '../shared/actions/panier.action';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  catalogue$ : Observable<Product[]>;
  productDetails: {reference: string, title:string, price: number};
  reference: string|null;

  constructor(private route: ActivatedRoute, private store:Store, private httpService: HttpServiceService) { 
    this.catalogue$ = new Observable;
    this.productDetails = {reference: "", title: "", price:0} ;
    this.reference = "";
  }

  ngOnInit(): void {
    this.reference = this.route.snapshot.paramMap.get('reference');
    this.catalogue$ = this.httpService.getCatalogue();
    this.catalogue$.subscribe((item)=>{
      item.forEach((product)=>{
        if(product.reference == this.reference){
          this.productDetails = product;
        }
      })
    })
  }

  addPanier (title: string, reference: string, price: number){
    this.store.dispatch(new AddProduct({"title": title, "reference": reference, "price": price}));
  }

}
