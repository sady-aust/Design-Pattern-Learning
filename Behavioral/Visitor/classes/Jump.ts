import {AnimalOperation} from "../imterfaces/AnimalOperation";
import {Dolphin} from "./Dolphin";
import {Monkey} from "./Monkey";
import {Lion} from "./Lion";

export class Jump implements AnimalOperation {
    visitDolphin(dolphin: Dolphin) {
        console.log('Walked on water a little and disappeared')
    }

    visitLion(lion: Lion) {
        console.log('Jumped 7 feet! Back on the ground!')
    }

    visitMonkey(monkey: Monkey) {
        console.log('Jumped 20 feet high! on to the tree!')
    }

}
