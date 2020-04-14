import {Animal} from "../imterfaces/Animal";
import {AnimalOperation} from "../imterfaces/AnimalOperation";

export class Dolphin implements Animal {
    speak() {
        console.log('Tuut tuttu tuutt!')
    }

    accept(operation: AnimalOperation) {
        operation.visitDolphin(this);
    }

}
