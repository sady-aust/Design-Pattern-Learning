import {Observer} from "../interfaces/Observer";
import {Subject} from "../interfaces/Subject";

export class ConcreteObserverA implements Observer{

    update(subject: Subject): void {
        if(subject.state<3){
            console.log('ConcreteObserverA: Reacted to the Event.')
        }
    }

}
