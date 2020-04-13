import {Command} from "../interfaces/Command";
import {Bulb} from "./Bulb";

export class TurnOn implements Command {
    constructor(private bulb: Bulb) {
    }

    execute() {
        this.bulb.turnOn();
    }

    redo() {
        this.execute();
    }

    undo() {
        this.bulb.turnOff();
    }

}
