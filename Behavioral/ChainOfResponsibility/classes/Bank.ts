import {Account} from "./Account";

export class Bank extends Account {

    constructor(balance: number) {
        super();
        this.balance = balance;
        this.name = 'Bank'
    }

}
