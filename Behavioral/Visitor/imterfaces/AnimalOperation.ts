//Visitor
import {Dolphin} from "../classes/Dolphin";
import {Monkey} from "../classes/Monkey";
import {Lion} from "../classes/Lion";

export interface AnimalOperation {
    visitMonkey(monkey:Monkey);
    visitLion(lion:Lion);
    visitDolphin(dolphin:Dolphin);
}
