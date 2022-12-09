export class Adress{
    public street: string;
    public zipcode: number;
    public city: string;
    public country: string;

    constructor(street: string, zipcode: number, city: string, country: string){
        this.street = street;
        this.zipcode = zipcode;
        this.city = city;
        this.country = country;
    }
}