import { BugerBuilder } from './BurgerBuilder';
export class Burger{
    public size:any;

    public cheese = false;
    public pepperoni = false;
    public lettuce =  false;
    public tomato = false;

    constructor(builder:BugerBuilder){
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.tomato = builder.tomato;
        this.lettuce = builder.lettuce;
        this.tomato = builder.tomato;
    }
}