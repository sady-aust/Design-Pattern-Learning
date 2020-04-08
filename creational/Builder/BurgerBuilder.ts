import { Burger } from "./Burger";

export class BugerBuilder{
    public size: any;

    public cheese = false;
    public pepperoni = false;
    public lettuce = false;
    public tomato = false;

    constructor(size:any){
        this.size = size;
    }

    addPepperoni(){
        this.pepperoni = true;
        return this;
    }

    addLettuce(){
        this.lettuce = true;
        return this;
    }
    addCheese(){
        this.cheese = true;
        return this;
    }
    addTomato(){
        this.tomato = true;
        return this;
    }

    build(): Burger{
        return new Burger(this)
    }
}