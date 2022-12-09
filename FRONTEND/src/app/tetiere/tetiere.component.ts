import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  nbElementPanier = 0;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(state=>state.panier.products.length).subscribe(number => this.nbElementPanier = number)
  }

}
