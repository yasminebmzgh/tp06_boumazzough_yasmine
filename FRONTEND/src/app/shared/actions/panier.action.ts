import {Product} from '../../models/product.model';

export class AddProduct {
    static readonly type = "[Product] Add";
    constructor (public payload : Product){};
}

export class DelProduct {
    static readonly type = "[Product] Del";
    constructor (public payload: Product){};
}