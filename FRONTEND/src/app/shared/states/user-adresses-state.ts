import { Injectable } from '@angular/core';
import { Action , State, StateContext,Selector } from '@ngxs/store';
import { AddAddress,DelAddress } from '../actions/address.action';
import { userAdresses } from 'src/app/models/userAdresses.model';

@State<userAdresses>({
    name: 'adress',
    defaults: {
        adresses : []
    } 
     
  })
  @Injectable()
  export class userAdressesState {
  
      @Selector () 
      static getNbProducts (state:userAdresses) {
          return state.adresses.length;
      }
  
      @Action (AddAddress)
          add(
              {getState, patchState } :  StateContext<userAdresses>, 
              { payload }: AddAddress) {
              const state = getState();
              patchState({adresses : [...state.adresses, payload]});
      }
  
      @Action (DelAddress)
      del(
              {getState, patchState } :  StateContext<userAdresses>, 
              { payload }: DelAddress) {
              const state = getState();
              let panierCopy = [...state.adresses];
              let indexRemove = panierCopy.indexOf(payload);
              panierCopy.splice(indexRemove, 1);
              patchState({adresses : panierCopy});
      }
      @Selector()
      static getAdresses(state:userAdresses){
        return state.adresses;
      }
  
  }