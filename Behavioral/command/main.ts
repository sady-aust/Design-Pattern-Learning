import {Bulb} from "./classes/Bulb";
import {TurnOn} from "./classes/TurnOn";
import {TurnOff} from "./classes/TurnOff";
import {RemoteControl} from "./classes/RemoteControl";

let bulb = new Bulb();

let turnOn = new TurnOn(bulb);
let turnOff = new TurnOff(bulb);

let remote = new RemoteControl();

remote.submit(turnOn);
remote.submit(turnOff);
