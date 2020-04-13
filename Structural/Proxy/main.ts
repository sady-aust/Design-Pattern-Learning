import {SecureDoor} from "./classes/SecureDoor";
import {LabDoor} from "./classes/LabDoor";

let door = new SecureDoor(new LabDoor());
door.open('invalid');

door.open('sadi');
door.close();
