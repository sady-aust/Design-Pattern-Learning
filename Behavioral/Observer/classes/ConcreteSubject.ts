import {Observer} from "../interfaces/Observer";
import {Subject} from "../interfaces/Subject";

export class ConcreteSubject implements Subject {
    state: number;
    private observers: Observer[] = [];

    attach(observer: Observer): void {

        const observerIndex  = this.observers.indexOf(observer);
        if (observerIndex  > -1) {
            console.log('Subject: Observer has been attached already.')
        }
        console.log('Subject: Attached an observer')
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if(observerIndex === -1){
            console.log('Subject: Nonexistent Observer.')
        }
        this.observers.splice(observerIndex,1);
        console.log('Subject: Detached an observer..')
    }

    notify(): void {
        console.log('Subject: Notifying observer...');
        this.observers.forEach(observer => observer.update(this))
    }

    public someBusinessLogic():void{
        console.log('Subject: I am doing something important.');
        this.state = Math.floor(Math.random()*(10+1));
        console.log('My State has benn changed to : '+this.state);
        this.notify();
    }



}
