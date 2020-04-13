import {SimpleCoffee} from "./classes/SimpleCoffee";
import {MilkCoffee} from "./classes/MilkCoffee";
import {WhipCoffee} from "./classes/WhipCoffee";
import {VanillaCoffee} from "./classes/VanillaCoffee";

let someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost())
console.log(someCoffee.getDescription())

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost())
console.log(someCoffee.getDescription())

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost())
console.log(someCoffee.getDescription())

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost())
console.log(someCoffee.getDescription())
