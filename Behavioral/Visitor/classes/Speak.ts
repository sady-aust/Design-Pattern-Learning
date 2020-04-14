import {AnimalOperation} from "../imterfaces/AnimalOperation";
import {Dolphin} from "./Dolphin";
import {Monkey} from "./Monkey";
import {Lion} from "./Lion";

export class Speak implements AnimalOperation {
    visitDolphin(dolphin: Dolphin) {
        dolphin.speak();
    }

    visitLion(lion: Lion) {
        lion.roar()
    }

    visitMonkey(monkey: Monkey) {
        monkey.shout()
    }

}
