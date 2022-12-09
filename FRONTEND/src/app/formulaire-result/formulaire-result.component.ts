import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ObservedValuesFromArray } from 'rxjs';
import { Adress } from '../models/adress.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { userAdressesState } from '../shared/states/user-adresses-state';
import { Store } from '@ngxs/store';



@Component({
  selector: 'app-formulaire-result',
  templateUrl: './formulaire-result.component.html',
  styleUrls: ['./formulaire-result.component.css']
})
export class FormulaireResultComponent implements OnInit {

  user: User;
  adresses$ : Observable<Adress[]>;
  adresses: Adress[];
  constructor(private userService: UserService, private store: Store) {
    this.adresses$ = new Observable();
    this.adresses = []; 
    this.user = new User(
      '',
      '',
      this.adresses,
      '0',
      '',
      '',
      '',
      '',
    )
  }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(
      (user: User) => {
        this.user = user;
      }
    )
    this.adresses$ = this.store.select(userAdressesState.getAdresses);
    this.adresses$.subscribe(item => this.adresses = item);
  }

}
