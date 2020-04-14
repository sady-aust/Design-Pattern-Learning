import {Observer} from "../interfaces/Observer";
import {Subject} from "../interfaces/Subject";

export class ConcreteObserverB implements Observer {

    update(subject: Subject): void {
        if (subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the Event.')
        }
    }

}
