// Visitee
import {AnimalOperation} from "./AnimalOperation";

export interface Animal {
    accept(operation: AnimalOperation);
}
