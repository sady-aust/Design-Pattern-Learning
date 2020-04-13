import {Account} from "./Account";

export class Paypal extends Account {

    constructor(balance: number) {
        super();
        this.balance = balance;
        this.name = 'Paypal'
    }

}
