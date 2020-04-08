import { BugerBuilder } from './BurgerBuilder';
let burger = (new BugerBuilder(14))
                .addCheese()
                .addLettuce()
                .addTomato()
                .build();

console.log(burger.size);
