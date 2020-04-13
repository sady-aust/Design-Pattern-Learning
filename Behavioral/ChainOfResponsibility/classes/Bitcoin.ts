import {Account} from "./Account";

export class Bitcoin extends Account {

    constructor(balance: number) {
        super();
        this.balance = balance;
        this.name = 'Bitcoin'
    }

}
