import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Adress } from '../models/adress.model';
import { User } from'../models/user.model';
import { UserService } from'../services/user.service';
import { userAdressesState } from '../shared/states/user-adresses-state';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userInfos: FormGroup;
  adresses$ :Observable<Adress[]>;
  adresses: Adress[];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private store: Store) {
    this.adresses$ = new Observable();
    this.adresses = [];
    this.userInfos = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      sexe: ['', Validators.required],
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      login: ['', Validators.required], 
    });
    
  }
  get password(){
    return this.userInfos.get('password');
  }
  get lastName(){
    return this.userInfos.get('lastName');
  }
  get firstName(){
    return this.userInfos.get('firstName');
  }
  get phone(){
    return this.userInfos.get('phone');
  }
  get email(){
    return this.userInfos.get('email');
  }
  get sexe(){
    return this.userInfos.get('sexe');
  }
  get login(){
    return this.userInfos.get('login');
  }

  submit(){
    const userInfosArray = this.userInfos.value;
    const newUser = new User(
      userInfosArray['lastName'],
      userInfosArray['firstName'],
      this.adresses,
      userInfosArray['phone'],
      userInfosArray['email'],
      userInfosArray['sexe'],
      userInfosArray['password'],
      userInfosArray['login'],
    )
    this.userService.addUser(newUser);
  }

  ngOnInit(): void {
    this.adresses$ = this.store.select(userAdressesState.getAdresses);
    this.adresses$.subscribe(item => this.adresses = item);
  }

}
