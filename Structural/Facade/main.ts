import {Computer} from "./classes/Computer";
import {ComputerFacade} from "./classes/ComputerFacade";

let computer = new ComputerFacade(new Computer());
computer.turnOn();
computer.turnOff();

