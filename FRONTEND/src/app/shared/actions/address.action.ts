import {Adress} from '../../models/adress.model';

export class AddAddress {
    static readonly type = "[Adress] Add";
    constructor (public payload : Adress){};
}

export class DelAddress {
    static readonly type = "[Adress] Del";
    constructor (public payload: Adress){};
}