import {Coffee} from "../interfaces/Coffee";

export class VanillaCoffee implements Coffee{
    constructor(private coffee:Coffee) {}

    getCost(): number {
        return this.coffee.getCost() + 3;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, vanilla`;
    }

}
