import { DoorFactory } from './DoorFacotry';

let door = DoorFactory.makeDoor(200,300);

console.log('Width ', door.getWidth());
console.log('Height  ', door.getHeight());

