import {Animal} from "../imterfaces/Animal";
import {AnimalOperation} from "../imterfaces/AnimalOperation";

export class Lion implements Animal {
    roar() {
        console.log('Roaaar!')
    }

    accept(operation: AnimalOperation) {
        operation.visitLion(this);
    }

}
