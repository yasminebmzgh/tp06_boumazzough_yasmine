import { Component, OnInit } from '@angular/core';
import { Adress } from '../models/adress.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { userAdressesState } from '../shared/states/user-adresses-state';
import { userAdresses } from '../models/userAdresses.model';
import { AddAddress, DelAddress } from '../shared/actions/address.action';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  adresses$ : Observable<Adress[]>;
  adresses : Adress[];
  streetInput: string;
  zipCodeInput: number;
  cityInput: string;
  countryInput: string;

  constructor(private store:Store) { 
    this.adresses$ = new Observable();
    this.adresses = [];
    this.streetInput="";
    this.zipCodeInput = 0;
    this.cityInput = "";
    this.countryInput = "";
  }

  ngOnInit(): void {
    this.adresses$ = this.store.select(userAdressesState.getAdresses);
    this.adresses$.subscribe(item => this.adresses = item);
  }

  addAdress(){
    this.store.dispatch(new AddAddress({"street": this.streetInput, "zipcode": this.zipCodeInput, "city":this.cityInput, "country": this.countryInput}));
  }

  removeAdress(adress: Adress){
    this.store.dispatch(new DelAddress(adress));
  }

}
