import { WoodenDoorFacotry } from './WoodenDoorFactory';
import { IronDoorFactory } from './IronDoorFactory';


let woodenDoorFacotry = new WoodenDoorFacotry();
let door = woodenDoorFacotry.makeDoor();
let expert = woodenDoorFacotry.makeFittingExpert();

door.getDescription();
expert.getDescription();

let ironDoorFactory = new IronDoorFactory();
door = ironDoorFactory.makeDoor();
expert = ironDoorFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();