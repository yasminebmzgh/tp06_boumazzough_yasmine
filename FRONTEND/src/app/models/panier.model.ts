import { Product } from "./product.model";

export class Panier{
    public products: Product[];

    constructor(){
        this.products = [];
    }
}