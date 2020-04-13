import {Command} from "../interfaces/Command";
import {Bulb} from "./Bulb";

export class TurnOff implements Command {
    constructor(private bulb: Bulb) {
    }

    execute() {
        this.bulb.turnOff();
    }

    redo() {
        this.execute();
    }

    undo() {
        this.bulb.turnOn();
    }

}
