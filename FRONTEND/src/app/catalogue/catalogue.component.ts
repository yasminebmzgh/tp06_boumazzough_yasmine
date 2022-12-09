import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../services/http-service.service';
import {Observable} from 'rxjs';
import { Product } from '../models/product.model';
import { Store } from '@ngxs/store';
import { AddProduct } from '../shared/actions/panier.action';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { fromEvent } from 'rxjs';
import { debounceTime,distinctUntilChanged,switchMap,catchError } from 'rxjs/operators';






@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  @ViewChild('search', { static: true })
  input!: ElementRef;
  searchField!: Observable<any>


  constructor(private httpservice : HttpServiceService, private store : Store, private router: Router) { 
    this.products = [];
    this.observable$ = new Observable;
    this.researchInput="";
  }


  observable$ : Observable<Product[]>;
  product!: Observable<Product[]>;
  products: Product[];
  researchInput: string;

  ngAfterViewInit(): void {
    this.searchField = fromEvent(this.input.nativeElement, 'keyup');
    this.product = this.searchField.pipe(
      map((event: any) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((search: string) => this.httpservice.search(search).pipe(
        catchError((error: any) => {
          console.log(error);
          return [];
        })
      ))
    )
  }



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
