export class Product{
    public title: string;
    public price: number;
    public reference: string;

    constructor(title: string, price:number, reference:string){
        this.title = title;
        this.price = price;
        this.reference = reference;
    }

}