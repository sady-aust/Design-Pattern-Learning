import {Coffee} from "../interfaces/Coffee";

export class SimpleCoffee implements Coffee {
    getCost(): number {
        return 10;
    }

    getDescription(): string {
        return "Simple Coffee";
    }


}
