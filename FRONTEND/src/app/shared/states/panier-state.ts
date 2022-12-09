import { Injectable } from '@angular/core';
import { Action , State, StateContext,Selector } from '@ngxs/store';
import { AddProduct,DelProduct } from '../actions/panier.action';
import { Panier } from '../../models/panier.model';

@State<Panier>({
    name: 'panier',
    defaults: {
        products : []
    } 
     
  })
  @Injectable()
  export class PanierState {
  
      @Selector () 
      static getNbProducts (state:Panier) {
          return state.products.length;
      }
  
      @Action (AddProduct)
          add(
              {getState, patchState } :  StateContext<Panier>, 
              { payload }: AddProduct) {
              const state = getState();
              patchState({products : [...state.products, payload]});
      }
  
      @Action (DelProduct)
      del(
              {getState, patchState } :  StateContext<Panier>, 
              { payload }: DelProduct) {
              const state = getState();
              let panierCopy = [...state.products];
              let indexRemove = panierCopy.indexOf(payload);
              panierCopy.splice(indexRemove, 1);
              patchState({products : panierCopy});
      }
      @Selector()
      static getProducts(state:Panier){
        return state.products;
      }
  
  }