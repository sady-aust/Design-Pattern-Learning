import {Animal} from "../imterfaces/Animal";
import {AnimalOperation} from "../imterfaces/AnimalOperation";

export class Monkey implements Animal {
    shout() {
        console.log('Ooh oo aa aa!')
    }

    accept(operation: AnimalOperation) {
        operation.visitMonkey(this);
    }

}
