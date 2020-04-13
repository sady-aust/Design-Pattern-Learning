import {Coffee} from "../interfaces/Coffee";

export class MilkCoffee implements Coffee{
   constructor(private coffee:Coffee) {}

    getCost(): number {
        return this.coffee.getCost() + 2;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, milk`;
    }

}
