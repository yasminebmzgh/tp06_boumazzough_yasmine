import { Adress } from "./adress.model";

export class User {
    public lastName: string;
    public firstName: string;
    public address: Adress[];
    public phone: string;
    public email: string;
    public sexe: string;
    public password: string;
    public login: string;

    constructor(lastName: string, firstName: string, adress: Adress[], phone: string, email: string, sexe: string, password: string, login: string) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.address = adress;
      this.phone = phone; 
      this.email = email;
      this.sexe = sexe;
      this.password = password; 
      this.login = login; 
    }
  }