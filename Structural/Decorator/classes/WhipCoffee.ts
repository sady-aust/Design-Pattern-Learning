import {Coffee} from "../interfaces/Coffee";

export class WhipCoffee implements Coffee{
    constructor(private coffee:Coffee) {}

    getCost(): number {
        return this.coffee.getCost() + 5;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, whip`;
    }

}
